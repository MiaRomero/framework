const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/exampleServer');

describe('the server', () => {

  it('should accept GET requests to /soeffervescent', (done) => {
    request('http://localhost:3000')
    .get('/soeffervescent')
    .end( (err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('anybody got a scoby?');
      done();
    });
  });
  it('should accept POST requests to /soeffervescent', (done) => {
    request('http://localhost:3000')
    .post('/soeffervescent')
    .send({ 'text': 'testText' })
    .end( (err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('testText');
      done();
    });
  });

  it('should error 404 on bad requests', (done) => {
    request('localhost:3000')
    .get('/badRoute')
    .end( (err, res) => {
      expect(err).to.not.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('404 Error, not found');
      done();
    });
  });
});
