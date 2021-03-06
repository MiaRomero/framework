const http = require('http');
const Router = require(__dirname + '/router');

var kombucha = module.exports = exports = {};

var router = new Router();

kombucha.get = (route, cb) => {
  router.get(route, cb);
};

kombucha.post = (route, cb) => {
  router.post(route, cb);
};

kombucha.put = (route, cb) => {
  router.put(route, cb);
};
kombucha.patch = (route, cb) => {
  router.patch(route, cb);
};

kombucha.delete = (route, cb) => {
  router.delete(route, cb);
};

kombucha.listen = (port, cb) => {
  port = process.env.PORT || 3000;
  cb = cb || function() {};
  kombucha.server = http.createServer(router.route());
  kombucha.server.listen(port, cb);
};
