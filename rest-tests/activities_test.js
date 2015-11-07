var superagent = require('superagent');
var expect = require('expect.js');

describe('activities rest api', function() {

  it('can access the endpoint for loading activities', function(done) {
    superagent.get('http://localhost:8000/api/load')
      .end(function(error, response) {
        expect(error).to.equal(null);
        expect(response.status).to.equal(200);
        done();
      });
  });

});
