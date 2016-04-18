const http = require('http');
const Router = require(__dirname + '/router');
var requestArray = [];
exports.getTestArray = requestArray;
var router = new Router();

exports.launch = function(port) {
  port = port || 3000;
  http.createServer( router.route() ).listen(port, () => {
    process.stdout.write('server up on ' + port);
  });
};

function GetObject(url, callBack, contentType, message) {
  this.url = url || '/';
  this.callBack = callBack || 'default';
  this.contentType = contentType || 'text/plain';
  this.message = message || '';
}

exports.getRequest = function(url, callBack, contentType, message) {
  var getObject = new GetObject(url, callBack, contentType, message);
  // requestArray.push(getObject);
  if (getObject.callBack === 'default') {
    router.get(getObject.url, (req, res) => {
      res.writeHead(200, { 'Content-Type': getObject.contentType });
      res.write(getObject.message);
      res.end();
    });
  }
  router.get(getObject.url, getObject.callBack);
};
