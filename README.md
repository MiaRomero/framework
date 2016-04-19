# Kombucha



<strong>The Kombucha Official (TKO) http Framework</strong>

How to use the TKO framework
=====================
Installation
-------------
```npm install kombucha```

To then use kombucha, you must require in ('kombucha').

```const kombucha = require('kombucha')```


Router Methods
<ul>
  <li><a href="#get-request">kombucha..get</a></li>
  <li><a href="#post-request">kombucha.post</a></li>
  <li><a href="#custom-404">kombucha.router.custom404</a></li>
</ul>
Server Methods
<ul>
  <li><a href="#listen">kombucha.listen</a></li>

  kombucha.listen(port, ()=>{
    port = process.env.PORT || 3000;
    console.log(port);
    console.log('server is up on the port ' + port);
  });
</ul>
--------------------

<h4><a name="get-request"></a>Setting up a route for a GET request:</h4>

<strong>kombucha.router.get(pathname, [plain/text])</strong>

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

<h4><a name="custom-404"></a>Setting up your own customer 404 response:</h4>

<strong>kombucha.router.custom404(string)</strong>

1.String: Any sting you use in here will then be set as your 404 response message.

404 messages have a default already built in. But if you want to create custom 404 messages you can.

```
kombucha.custom404('some custom message here');
```

Every 404 you encounter will now respond with 'some custom message here'.

<h4><a name="listen"></a>Starting up your server:</h4>

<strong>kombucha.listen([port])</strong>

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
