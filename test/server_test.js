const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('the server', () => {
  it('should accept GET requests to ____route', (done) => {
    request('localhost:3000')
    .get('___route')
    .end( (err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('_____');
      done();
    });
  });
  it('should accept POST requests to _____route', (done) => {
    request('localhost:3000')
    .post('____route')
    .send({ 'test': 'testText' })
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
      expect(res.text).to.eql('_____custom 404 message/default');
      done();
    });
  });
});
/* ///////////////// */
describe('the server', () => {
  var getTestArray = [
    { method: 'GET', route: '/myServer', message: '<h2>Welcome to myServer!</h2>' },
    { method: 'GET', route: '/myServer/time', message: '<h3>The server time is: ' + Date() + '</h3>' },
    { method: 'GET', route: '/myServer/greet/Stranger', message: '<h2>Hello Stranger!</h2>' }
  ];

  var postTestArray = [
    { method: 'POST', route: '/myServer/greet', message: '<h2>Hello Maria!</h2>' }
  ];

  getTestArray.forEach( (testObject) => {
    it('should accept a GET request to ' + testObject.route, (done) => {
      request('localhost:3000')
      .get(testObject.route)
      .end( (err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql(testObject.message);
        done();
      });
    });
  });

  postTestArray.forEach( (testObject) => {
    it('should accept a POST request to ' + testObject.route, (done) => {
      request('localhost:3000')
      .post(testObject.route)
      .send({ 'name': 'testText' })
      .end( (err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('<h2>Hello testText!</h2>');
        done();
      });
    });
  });

  it('should error 404 on bad requests', (done) => {
    request('localhost:3000')
    .get('/badRoute')
    .end( (err, res) => {
      expect(err).to.not.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('_____custom 404 message/default');
      done();
    });
  });
});
