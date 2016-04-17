const http = require('http');
// const router = require(__dirname + '/router');

module.exports = function (port) {
  port = port || 3000;
  http.createServer( (req, res) => {   // router.route()
  }).listen(port, () => {
    process.stdout.write('server up on ' + port);
  });
};
