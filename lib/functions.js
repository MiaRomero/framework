var fs = require('fs');
var Router = require('./router');
var server = require('./server');
var http = require('http');
var url = require('url');
var routes = new Router();

// note: you must require this file (functions.js) in server.js
// or index.js. But i have not been able to get it to work.
// However, the functions all work if each function is actually
// written in the file that you want to call them in and than also
// called from that file. So in order for any of these functions
// to work, they must be defined in the same file that they are
// called in. I CANNOT GET THE module.exports to work right!!!

// this code creates an object to hold the exports from this file
var myFunctions = module.exports = exports = {};

// the myFunctions.readfile, this puts the function readFile into the
// myFunctions object under the property readFile of myFunctions,
// and gives it the ability to be exported and required in another
// file by property name.
//
// For this function, you must plug in the pathname of the file under the
// pathName parameter and make sure to prefix the pathName with a
// backslash('/'), IE: '/test' and the file name under fileName parameter.
// do not prefix the fileName with anything.
// this goes to the existing directory and writes the data of the file
// to the browser as well as the console.
myFunctions.readFile  = function(pathName, fileName) {
  routes.get(pathName, function (req, res) {
    debugger;
    var data = fs.readFileSync(__dirname + '/test/' + fileName);
    console.log(data.toString())
    res.write(data.toString())
    res.end();
  });
};

// these below functions are all functional and i just haven't added
// them to the myFunctions object for export, because it is IMPOSSIBLE.
//
// This function supplies a unique name for a file that is based on
// the current new Date() sliced to only include hours, minutes & seconds
var fileNamerTimeDTS = function() {
  var time = new Date().toString().slice(16,24);
  return time;
};
// this function lists all of the files of a directory on a server to the
// browser as well as the console. this is done by putting the pathname
// of the directory into  the pathName parameter. Prefix the path with
// a backslash '/'. IE: /test
var directoryListAllFiles = function(pathName) {
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
      };
      res.end();
    });
  });
};
// this takes a POST request, which must be in JSON format, and writes it
// to a file. The file can be named by writing something to the fileName
// parameter. If nothing is given to the fileName parameter, that it will
// automatically give it a name supplied by the namer function from above,
// which names it based on current hour, minute and time.
var postJSONtoFILE = function(pathName, fileName) {
  routes.post('/test', function(req, res) {
    req.on('data', (data) => {
      var postFileName = fileName || fileNamerTimeDTS();
      console.log('saving JSON data to /test');
      fs.writeFile('./test/' + postFileName + '.json',data, (err) => {
        if(err) console.log(err);
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        console.log('JSON data input saved to location /test/' + postFileName + '.json');
        res.write('{"message":"saving JSON data to /test/'+ postFileName + '"}');
        res.end();
      });
    });
  });
  // this function is for getting the stats of a file or a directory. it takes
  // two parameters. a pathName, which is the folder holding the file,
  // and fileName which is the actual file to be read. If no file is supplied,
  // it will run stats on the pathNam instead.
  var getFileInfo = function(pathName, fileName) {
    routes.get('/checkfile', function(req,res) {
      var statInfo;
      var checkPath = pathName;
      var checkFilePath = fileName;
      console.log("Going to get file info!");
      if(checkFilePath === undefined) {
        fs.stat(__dirname + pathName + '/', function (err, stats) {
          if (err) {
            return console.error(err);
          }
          console.log(stats);
          console.log("Got file info successfully!");
          console.log("isFile ? " + stats.isFile());
          console.log("isDirectory ? " + stats.isDirectory());
        });
      }
      else {
        fs.stat(__dirname + pathName + '/' + fileName, function (err, stats) {
          if (err) {
            return console.error(err);
          }
          statInfo = stats;
          console.log(stats);
          console.log("Got file info successfully!");
          console.log("isFile ? " + stats.isFile());
          console.log("isDirectory ? " + stats.isDirectory());
        });
      }
      if(fileName === undefined) {
        res.write('Path stats were requested on is: ' + pathName + '/');
      } else {
        res.write('Path stats were requested on is: ' + pathName + '/' + fileName);
      }
      console.log(statInfo);
      res.end();
    })
  }
// };
//
// this postREGULARtoFILE function is non-functional. I could not get it
// to work. I think that is because POST requests must be JSON, but I am
// not sure.
//
// var postREGULARtoFILE = function(pathName, fileName) {
//   routes.post('/test/plaintxt', function(req, res) {
//     req.on('data', (data) => {
//       var postFileName = fileName || fileNamerTimeDTS();
//       console.log('saving PLAIN TXT data to /test');
//       fs.writeFile('./test/plaintxt' + postFileName + '.txt', data, (err) => {
//         if(err) console.log(err);
//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
//       });
//       console.log('PLAIN TXT data input saved to /test/plaintxt' + postFileName + '.txt');
//       res.write('saving PLAIN TXT data to /test/plaintxt/' + postFileName + '.txt');
//       res.end();
//     });
//   });
// };
//
// readFile('/home','testfile.js');
// directoryListAllFiles('/test');
// postJSONtoFILE('/test','boogy');
// getFileInfo('/test','boogy.json');
