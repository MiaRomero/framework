const kombucha = require(__dirname + '/../lib/server');

kombucha.listen(3000, () => {
  console.log('server drunk on 3000');
});

kombucha.get('/soeffervescent', 'anybody got a scoby?');

kombucha.post('/soeffervescent');

kombucha.get('/emptyBottle', (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 not found');
  res.end();
});

module.exports = exports = kombucha;
