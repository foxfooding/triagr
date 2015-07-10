'use strict';

var tpl = require('../template.js');
var utils = require('../utils.js');

module.exports = function(ctx) {
  return tpl.read('/views/empty.tpl').then(function(template) {
    return utils.render(template, {});
  });
};
