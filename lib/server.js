const http = require('http');
const router = require(__dirname + '/router');
// module.exports = exports = new Server();
var server = module.exports = exports = {};


server.listen = function (port) {
  port = port || 3000;
  http.createServer( (req, res) => {   // router.route()
  }).listen(port, () => {
    process.stdout.write('server up on ' + port);
  });
};

// exports.Server = server;
