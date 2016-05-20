const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/exampleServer');
const Router = require(__dirname + '/../lib/router');
const router = new Router();

describe('the kombucha router on exampleServer', () => {

  it('should have all the REST functions', () => {
    expect(router.routes).to.have.property('GET');
    expect(router.routes).to.have.property('POST');
    expect(router.routes).to.have.property('PUT');
    expect(router.routes).to.have.property('PATCH');
    expect(router.routes).to.have.property('DELETE');
  });

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
