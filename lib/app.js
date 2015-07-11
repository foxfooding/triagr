'use strict';

var inherits = require('inherits');
var page = require('page');
var localforage = require('localforage');

var EE = require('events').EventEmitter;

var conf = require('./config.js');
var bz = require('./bz.js');
var tpl = require('./template.js');
var utils = require('./utils.js');

// Prevent context menus on links that act as chrome
// buttons
document.addEventListener('contextmenu', function(e) {
  if (e.target.dataset.ctxCapture) {
    e.preventDefault();
  }
});

inherits(App, EE);
function App() {
  EE.call(this);

  var opts = {};
  if (process.env.TEST) {
    opts.test = true;
  }

  this.page = page;
  this.bugzilla = bz.createClient(opts);
}

App.prototype.init = function() {
  if (localStorage.user) {
    var details = JSON.parse(localStorage.user);
    this.bugzilla.validLogin(details).then(function() {
      this.user = {name: details.login};
      this.emit('login', details.login);
      this.emit('init');
    }.bind(this)).catch(function() {
      this.emit('logout');
      this.emit('init');
    }.bind(this));
  } else {
    this.emit('logout');
    this.emit('init');
  }
};

App.prototype.login = function(email, password) {
  var opts = {login: email, password: password};
  return this.bugzilla.login(opts).then(function(result) {
    this.user = {name: email};
    localStorage.user = JSON.stringify({login: email, token: result.token});
    page('/');
    return result;
  }.bind(this));
};

function loggedOut() {
  this.emit('logout');
  page('/');
}

// Disable desktop support for now
function isDesktop() {
  return false;
  //return window.matchMedia( "(min-width: 800px)" ).matches;
}

App.prototype.logout = function() {
  localStorage.user = '';
  this.user = null;
  this.bugzilla.logout()
    .then(loggedOut.bind(this))
    .catch(loggedOut.bind(this));
};

App.prototype.nextBug = function() {
  var numBugs = 100;
  this.bugzilla.searchBugs({
    component: 'Gaia::Feedback',
    resolution: '---',
    include_fields: 'summary,id,assigned_to,flags,last_change_time',
    limit: numBugs
  }).then(function(result) {
    if (!result.bugs.length) {
      page('/empty/');
    } else {
      var id = Math.round(Math.random() * (result.bugs.length - 1));
      page('/bug/' + result.bugs[id].id);
    }
  });
};

var app = new App();
var state;

var lastRender = Promise.resolve();
function render(to, view) {
  return function(ctx, next) {

    // Do each template sequentially
    lastRender = lastRender.then(function() {
      return (typeof view === 'string') ? tpl.read(view) : view(ctx);
    }).then(function(dom) {
      var target = to;
      if (target === '#secondScreen' && !isDesktop()) {
        target = '#content';
      }
      target = (typeof target === 'string') ? document.querySelector(target) : to;
      target.innerHTML = '';
      target.appendChild(dom);
      if (next) {
        next();
      }
    }).catch(function(err) {
      console.error(err);
    });
  };
}

function loadBug(ctx, next) {
  app.bugzilla.getBug(ctx.params.id).then(function(bug) {
    ctx.bug = bug.bugs[0];
    next();
  });
};

function modalLogin(ctx, next) {
  if (!app.user) {
    page('/login/');
  } else {
    next();
  }
}

var dashboard = require('./views/dashboard.js');
var bug = require('./views/bug.js');

page(function(ctx, next) {

  ctx.app = app;
  ctx.state = state;

  next();
});

page('/login/', function(ctx, next) {
  if (app.user) {
    page('/');
  } else {
    render('#content', require('./views/login.js'))(ctx, next);
  }
});

page('/logout/', app.logout.bind(app));

page('/', modalLogin, app.nextBug.bind(app));
page('/empty/', render('#content', require('./views/empty.js')));
//page('/dashboard/', modalLogin, render('#content', dashboard));
//page('/dashboard/flags/', modalLogin, render('#content', dashboard));
//page('/dashboard/flagged/', modalLogin, render('#content', dashboard));
//page('/dashboard/filed/', modalLogin, render('#content', dashboard));

page('/bug/:id', loadBug, render('#secondScreen', bug),
     render('#bugContent', require('./views/bug-comments.js')));
page('/bug/:id/details/', loadBug, render('#secondScreen', bug),
     render('#bugContent', require('./views/bug-details.js')));
page('/bug/:id/attachments/', loadBug, render('#secondScreen', bug),
     render('#bugContent', require('./views/bug-attachments.js')));

//page('/create/', render('#content', require('./views/create-bug.js')));

//page('/search/', render('#content', require('./views/search.js')));
//page('/search/:search', render('#content', require('./views/search.js')));

page('/profile/', render('#content', require('./views/profile.js')));

var INTRO_KEY = 'intro_key';
render(document.body, require('./views/home.js'))(null, function() {
  // Try to infer FxOS with a basic UA test
  if (navigator.userAgent.indexOf('Mobile') === -1 ||
      navigator.userAgent.indexOf('Android') !== -1) {
    return;
  }
  localforage.getItem(INTRO_KEY).then(function(value) {
    if (!value) {
      var dialog = document.getElementById('intro');
      var submit = document.getElementById('intro-submit');
      submit.addEventListener('click', function() {
        localforage.setItem(INTRO_KEY, true);
        dialog.hidden = true;
      });
      dialog.hidden = false;
    }
  });
});

app.on('init', function() {

  lastRender.then(function() {

    page();

    if (!navigator.mozSetMessageHandler) {
      return;
    }

    navigator.mozSetMessageHandler('activity', function(activity) {
      if (activity.source.name === 'share') {
        lastRender.then(function() {
          app.activity = activity.source;
          page('/create/');
        });
      }
    });

  });

});

app.init();
