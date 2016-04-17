var fs = require('fs');

const Router = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'DELETE': {},
    'PUT': {},
    'PATCH': {}
  };
};
Router.prototype.get = function(routeName, cb) {
  this.routes.GET[routeName] = cb;
  return this;
};
Router.prototype.post = function(routeName, cb) {
  this.routes.POST[routeName] = cb;
  return this;
};
Router.prototype.delete = function(routeName, cb) {
  this.routes.DELETE[routeName] = cb;
  return this;
};
Router.prototype.put = function(routeName, cb) {
  this.routes.PUT[routeName] = cb;
  return this;
};
Router.prototype.patch = function(routeName, cb) {
  this.route.PATCH[routeName] = cb;
  return this;
};
Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if(typeof routes[req.method][req.url] === 'function')
      routes[req.method][req.url](req, res);
  };
};
module.exports = Router;
