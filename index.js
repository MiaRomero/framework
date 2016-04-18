// module.exports = exports = require(__dirname + '/lib/router');
// module.exports = exports = require(__dirname + '/lib/server');
const server = require(__dirname + '/lib/server');
exports.router = require(__dirname + '/lib/server');


server.launch(3000);
server.getRequest('/soeffervescent', 'default', 'text/plain', 'anybody got a scoby?');
