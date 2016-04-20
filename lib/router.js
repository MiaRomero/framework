const Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes.GET[route] = cb;
  return this;
};


Router.prototype.post = function(route, cb) {
  this.routes.POST[route] = cb;
  return this;
};

Router.prototype.put = function(route, cb) {
  this.routes.PUT[route] = cb;
  return this;
};

Router.prototype.patch = function(route, cb) {
  this.routes.PATCH[route] = cb;
  return this;
};

Router.prototype.delete = function(route, cb) {
  this.routes.DELETE[route] = cb;
  return this;
};

Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function') {
      routes[req.method][req.url](req, res);
      return res.end();
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 error, not found');
    return res.end();
  };
};
