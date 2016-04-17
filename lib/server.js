const http = require('http');
const Router = require('./router');
const fs = require('fs');
var url = require('url');

var routes = new Router;
module.exports = http.createServer(routes.route()).listen(3000, () => console.log('server is now running on port 3000\n'));
