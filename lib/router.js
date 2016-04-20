// const func = require(__dirname + '/functions');

const Router = module.exports = exports = function(){
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH':{},
    'DELETE':{}
  };
};


Router.prototype.get = function(route, cbi){
  // this.routes.GET[route] = cb;

var cbs = cbi;


  function get(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(cbi)
    res.end();
  }

  function get2(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is what you see if you don\'t put in that 2nd argument');
    res.end();
  }


  typeof cbi === 'string' ? cb = get : cb = get2;


  this.routes.GET[route] = cb;
  return this;

};


Router.prototype.post = function(route, cbs){
      console.log('x');

  function postX(req, res){
    req.on('data', (data)=>{
      var parsed = JSON.parse(data);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      // console.log(parsed.hello);
      console.log('post route')
      res.write('this');
      return res.end();
    })
    return;
  }

  typeof cbs === 'string' ? cb = null : cb = postX;
  this.routes.POST[route] = cb;

  return this;
};

Router.prototype.put = function(route, cb){
  this.routes.PUT[route] = cb;
  return this;
};

Router.prototype.patch = function(route, cb){
  this.routes.PATCH[route] = cb;
  return this;
};

Router.prototype.delete = function(route, cb){
  this.routes.DELETE[route] = cb;
  return this;
};

Router.prototype.route = function(){
  var routes = this.routes;
  return function(req, res){
    if(typeof routes[req.method][req.url] === 'function')
      return routes[req.method][req.url](req, res);
      res.end();
  };
};
