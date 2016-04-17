const Router = require('./router');
const fs = require('fs');
var routes = new Router();
var url = require('url');
const http = require('http');


//this function takes a directory path as a parameter and does a get request
//to that location  and checks for files in the directory with fs.readdir()
exports.readdir = function(pathName) {
  routes.get(pathName, function (req, res) {
    fs.readdir('.' + pathName, (err, files) => {
      if(!files.length) {
        err = 'ERROR: no files at ' + pathName + '\n';
        console.log(err);
      } else {
        console.log('Getting file list from' + pathName);
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        for(var i = 0; i < files.length; i++) {
          res.write('filepath: ' + req.url + '/' + files[i].toString() + '\n');
          console.log(files[i]);
        };
      }
      res.end();
    });
  })
}
function tester(pathName) {
  routes.get(pathName, function (req, res) {
    fs.readfileSync('.' + pathName, (err, files) => {
      if(!files) {
        err = 'ERROR: no files at /'+ pathName + '\n';
        console.log(err);
      }
      res.end()
    });
  });
};
