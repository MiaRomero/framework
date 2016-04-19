// const chai = require('chai');
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// const expect = chai.expect;
// const request = chai.request;
// const server = require(__dirname + '/../lib/server');
//
//
// describe('the server', () => {
//
//   getTestArray.forEach( (testObject) => {
//     it('should accept a GET request to ' + testObject.route, (done) => {
//       request('localhost:3000')
//       .get(testObject.route)
//       .end( (err, res) => {
//         expect(err).to.eql(null);
//         expect(res.status).to.eql(200);
//         expect(res.text).to.eql(testObject.message);
//         done();
//       });
//     });
//   });
//
//   postTestArray.forEach( (testObject) => {
//     it('should accept a POST request to ' + testObject.route, (done) => {
//       request('localhost:3000')
//       .post(testObject.route)
//       .send({ 'test': 'testText' }) ///change to custom POST
//       .end( (err, res) => {
//         expect(err).to.eql(null);
//         expect(res.status).to.eql(200);
//         expect(res.text).to.eql('<h2>Hello testText!</h2>');
//         done();
//       });
//     });
//   });
//
//   it('should error 404 on bad requests', (done) => {
//     request('localhost:3000')
//     .get('/badRoute')
//     .end( (err, res) => {
//       expect(err).to.not.eql(null);
//       expect(res.status).to.eql(404);
//       expect(res.text).to.eql('404 error, not found');
//       done();
//     });
//   });
// });
