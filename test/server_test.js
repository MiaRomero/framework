const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../lib/server');

describe('the server', () => {

  before(() => {
    server.listen(3000, () => {
      console.log('server up');
    });
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
    .send({ 'test': 'testText' })
    .end( (err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('testText');
      done();
    });
  });
  // it('should error 404 on bad requests', (done) => {
  //   request('localhost:3000')
  //   .get('/badRoute')
  //   .end( (err, res) => {
  //     expect(err).to.not.eql(null);
  //     expect(res.status).to.eql(404);
  //     expect(res.text).to.eql('404 not found');
  //     done();
  //   });
  // });
});
