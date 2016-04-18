const http = require('http');
const Router = require(__dirname + '/router');
// var getrequestArray = [];
// exports.getTestArray = requestArray;

// var postrequestArray = [];
// exports.postTestArray = postrequestArray;

var router = new Router();

exports.launch = function(port) {
  port = port || 3000;
  http.createServer( router.route() ).listen(port, () => {
    process.stdout.write('server up on ' + port);
  });
};

function RequestObject(url, callBack, contentType, message) {
  this.url = url || '/';
  this.callBack = callBack || 'default';
  this.contentType = contentType || 'text/plain';
  this.message = message || '';
}

exports.getRequest = function(url, callBack, contentType, message) {
  var getObject = new RequestObject(url, callBack, contentType, message);
  if (getObject.callBack === 'default') {
    router.get(getObject.url, (req, res) => {
      console.log(req.method);
      res.writeHead(200, { 'Content-Type': getObject.contentType });
      res.write(getObject.message);
      res.end();
      return;
    });
  }
  router.get(getObject.url, getObject.callBack);
};

exports.postRequest = function(url, callBack, contentType, message) {
  var postObject = new RequestObject(url, callBack, contentType, message);
  if (postObject.callBack === 'default' && postObject.contentType === 'application/json') {
    router.post(postObject.url, (req, res) => {
      req.on('data', (data) => {
        var parsed = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': postObject.contentType });
        res.write(parsed);
        // res.write(postObject.message);
        return res.end();
      });
    });
  }
  router.post(postObject.url, postObject.callback);
};
