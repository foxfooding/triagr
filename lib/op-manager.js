'use strict';

module.exports.queue = function(ops, cb) {
  var proxyPromise = new Promise(function(resolve, reject) {
    Promise.all(ops).then(function() {
      var promise = cb();
      promise.then(resolve, reject);
    });
  });
  ops.push(proxyPromise);
};
