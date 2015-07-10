'use strict';

var timeago = require('timeago');

var tpl = require('../template.js');
var utils = require('../utils.js');
var opManager = require('../op-manager.js');

module.exports = function(ctx) {
  return Promise.all([
    tpl.read('/views/bug-comment.tpl'),
    ctx.app.bugzilla.getBugComments(ctx.params.id),
    tpl.read('/views/bug-comments.tpl')
  ]).then(function(results) {

    var row = results[0];
    var comments = results[1].bugs[ctx.params.id];
    var page = results[2];

    var list = page.querySelector('ul#comments');

    list.classList.add('comments');
    comments.comments.forEach(function (comment) {
      if (!comment.text) return;
      list.appendChild(utils.render(row, {
        '.author': comment.author,
        '.created': timeago(comment.creation_time),
        '.comment': comment.text
      }));
    });

    var status = page.querySelector('#status');
    status.value = ctx.bug.status;

    var component = page.querySelector('#component');
    component.value = ctx.bug.component;

    var form = page.querySelector('form');
    var comment = page.querySelector('#commentInput');
    var needinfo = page.querySelector('#needinfo');

    var assigned = page.querySelector('#assigned');
    assigned.value = ctx.bug.assigned_to;

    var skip = page.querySelector('#skip');

    var feature = page.querySelector('#feature');
    feature.checked = (ctx.bug.keywords.indexOf('feature') !== -1);

    var ux = page.querySelector('#ux');

    var webcompat = page.querySelector('#webcompat');

    var platform = page.querySelector('#platform');

    var duplicate = page.querySelector('#duplicate');

    page.querySelector('#take').addEventListener('click', function() {
      var msg = 'Are you sure you want to assign yourself to this bug?';
      if (confirm(msg)) {
        assigned.value = ctx.app.user.name;
      }
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var ops = [];
      var bugDetails = {flags: []};

      if (comment.value) {
        opManager.queue(ops, function() {
          return ctx.app.bugzilla.createComment({
            id: ctx.params.id,
            comment: comment.value
          });
        });
      }

      if (status.value !== ctx.bug.status) {
        bugDetails.status = status.value;
      }

      if (component.value !== ctx.bug.component) {
        bugDetails.component = component.value;
      }

      if (feature.checked) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: 'fxos.triage.feature@gmail.com'
        });
      }

      if (ux.checked) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: 'firefoxos-ux-bugzilla@mozilla.com'
        });
      }

      if (webcompat.checked) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: 'fxos.triage.webcompat@gmail.com'
        });
      }

      if (platform.checked) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: 'fxos.triage.platform@gmail.com'
        });
      }

      if (duplicate.checked) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: 'fxos.triage.duplicate@gmail.com'
        });
      }

      if (ctx.bug.whiteboard.indexOf('[triagr]') === -1) {
        bugDetails.whiteboard = ctx.bug.whiteboard + '[triagr]';
      }

      if (component.value === 'Gaia::Feedback') {
        if (!confirm("You didn't change this bug's component. " +
                     "Are you sure you want to make changes?")) {
          return;
        }
      }

      if (assigned.value !== ctx.bug.assigned_to) {
        bugDetails.assigned_to = assigned.value;
      }

      if (needinfo.value) {
        bugDetails.flags.push({
          name: 'needinfo',
          new: true,
          status: '?',
          requestee: needinfo.value
        });
      }

      if (Object.keys(bugDetails).length) {
        opManager.queue(ops, function() {
          return ctx.app.bugzilla.updateBug(ctx.params.id, bugDetails);
        });
      }

      Promise.all(ops).then(function() {
        ctx.app.page('/');
      });
    });

    var skipClickHandler = function(e) {
      var bugDetails = {};
      var ops = [];

      bugDetails.flags = [{
        name: 'needinfo',
        new: true,
        status: '?',
        requestee: 'fxos.triage@gmail.com'
      }];

      var autoComment =
        'Triagr automatic comment: didn\'t know what to do when triaging.';

      opManager.queue(ops, function() {
        return ctx.app.bugzilla.createComment({
          id: ctx.params.id,
          comment: autoComment
        });
      });

      if (ctx.bug.whiteboard.indexOf('[triagr]') === -1) {
        bugDetails.whiteboard = ctx.bug.whiteboard + '[triagr]';
      }

      if (Object.keys(bugDetails).length) {
        opManager.queue(ops, function() {
          return ctx.app.bugzilla.updateBug(ctx.params.id, bugDetails);
        });
      }

      Promise.all(ops).then(function() {
        ctx.app.page('/');
      });
    };

    skip.addEventListener('click', function(e) {
      if (confirm('Would you like to ask for help triaging this?')) {
        skipClickHandler();
      } else {
        ctx.app.page('/');
      }
    });

    return page;
  });
};
