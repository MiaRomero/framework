# Kombucha



<strong>The Kombucha Official (TKO) http Framework</strong>

How to use the Kombucha framework
=====================
Installation
-------------
```npm install kombucha```

To then use kombucha, you must require in ('kombucha').

```const kombucha = require('kombucha')```


Router Methods
<ul>
  <li><a href="#get-request">kombucha.get('/getRoute', "desired text")</a></li>
  <li><a href="#post-request">kombucha.post('/postRroute')</a></li>
</ul>
Server Methods
<ol>
  <li><a href="#listen">kombucha.listen( 3000 , ()=> connsole.log('server is up on 3000'))</a> (Use this if you just want to put in the number of the port yourself. "3000" is just an example. )</li>
<li>

var port = process.env.PORT;
  kombucha.listen(port, ()=>{
    port = process.env.PORT || 3000;
    console.log(port);
    console.log('server is up on the port ' + port);
  });
  (Use this if you want to use an environment variable. If you don't have one, it will default to port 3000, which you can change if you want.)
  </li>
</0l>
--------------------

<h4><a name="get-request"></a>Setting up a route for a GET request:</h4>

<strong>kombucha.get(pathname, [plain/text])</strong>

Sets up a basic route on your server that will return the plain/text you give it as a second argument

1. Pathname: Any valid url character may be used in the form of a string.
2. Response[optional]: The response you want the server to send and thus be displayed on a browser if you navigate to this route. If you do not include a response it defaults to a placeholder.

```
kombucha.get('/soeffervescent', "anybody got a scoby?");
```

will print "anybody got a scoby?" when you visit /soeffervescent.

```
kombucha.get('/default');
```

kombucha.post('/yourownurl');
```


<h4><a name="post-request"></a>Setting up a route for a POST request:</h4>

<strong>kombucha.post(pathname, [callback])</strong>

1.Pathname: Any valid url character may be used in the form of a string.
2.Callback[optional]: A callback function with the parameters of request and response. If left black will default to an empty response.

and setting up a route for a POST request is easy if you can use the default callback provided above.  Simply use the following code:

```
kombucha.post('/yourownurl');
```

Here is an example of an optional callback.


```kombucha.post('/sobubblysosweet', function(request, response){
      var totalData = '';
      request.on('data', function(data){
        totalData += data.toString();
      });
      request.on('end', function() {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(totalData);
        response.end();
      });```



<h4><a name="listen"></a>Starting up your server:</h4>

<strong>kombucha.listen([port], [optional callback])</strong>

1.Port(optional): You can set what port you want your server to be on. If you provide no arguments it will default to 3000.


```
kombucha.listen(3000.()=>{console.log('Server is running on 3000')});

```

Your server is now listen on port 3000.

```

readme and other inspiration from Sludgy Trucker Coffee (STC)

```
Docs & Dev Dependencies included:
gulp, eslint, mocha, chai, gulp-mocha, gulp-eslint, chai http,
