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
// var cbs = cbi;
var cb;
debugger;

  function get1(req, res){
    console.log("3" +  req.url);
    req.url === route ? console.log(req.url) : console.log('no');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(cbi)
    res.end();
  }

  function get2(req, res){
    // console.log(route !== req.url);
      // !route ? console.log('not eql') : console.log('eql');
   req.url === route ? console.log(req.url) : console.log('no');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is what you see if you don\'t put in that 2nd argument');
    res.end();
  }

  function fo4(req, res){
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.write('not heres');
    console.log('not here')
    res.end();
  }



  typeof cbi === 'string' ? cb = get1 : cb = get2;
  // !route ? console.log('not eql') : console.log('eql');
  this.routes.GET[route] = cb;
  return this;

};


Router.prototype.post = function(route, cbs){
  function postX(req, res){
    req.on('data', (data)=>{
      var parsed = JSON.parse(data);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      console.log(parsed.hello);
      console.log('post route')
      res.write(parsed.hello);
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


Router.prototype.fourohfour = function(req, res){
var fourOhinput;
  function fouroh(input){
   var fourOhinput = input;
  }

  res.writeHead(404, {'Content-Type':'text/plain'});
  res.write(fourOhinput);
  res.end();
}


Router.prototype.route = function(){
  var routes = this.routes;
  return function(req, res){
    if(typeof routes[req.method][req.url] === 'function')
      return routes[req.method][req.url](req, res);
      res.end();
  };
};
