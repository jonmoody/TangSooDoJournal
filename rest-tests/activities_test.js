var superagent = require('superagent');
var expect = require('expect.js');
var mongodb = require('mongodb').MongoClient;

describe('activities rest api', function() {

  function cleanDatabase() {
    mongodb.connect('mongodb://localhost/journal', function(err, db) {
      var collection = db.collection('activities');
      collection.remove({});
    });
  }

  before(function() {
    cleanDatabase();
  });

  afterEach(function() {
    cleanDatabase();
  })

  it('can access the endpoint for loading activities', function(done) {
    superagent.get('http://localhost:8000/api/load')
      .end(function(error, response) {
        expect(error).to.equal(null);
        expect(response.status).to.equal(200);
        done();
      });
  });

  it('can access the endpoint for saving activities', function(done) {
    var expectedDate = 'January 15, 2015';
    var expectedActivities = [{
      name: 'Hyung',
      time: 15
    }];

    superagent.post('http://localhost:8000/api/save')
      .send({
        _id: expectedDate,
        activities: expectedActivities
      })
      .end(function(error, response) {
        expect(error).to.equal(null);
        expect(response.body._id).to.equal(expectedDate);
        expect(response.body.activities).to.eql(expectedActivities);
        done();
      });
  });

  it('can retrieve data from the database', function(done) {
    var expectedDate = 'January 15, 2015';
    var expectedActivities = [{
      name: 'Hyung',
      time: 15
    }];

    superagent.post('http://localhost:8000/api/save')
      .send({
        _id: expectedDate,
        activities: expectedActivities
      })
      .end(function(error, response) {
        expect(response.body._id).to.equal(expectedDate);
        expect(response.body.activities).to.eql(expectedActivities);
        done();
      });

    superagent.get('http://localhost:8000/api/load')
      .end(function(error, response) {
        expect(response.body.length).to.equal(1);
        expect(response.body[0]._id).to.equal(expectedDate);
        expect(response.body[0].activities).to.equal(expectedActivities);
        done();
      });
  });

  it('will update an existing record if the data was already posted on the same day', function(done) {
    var expectedDate = 'January 15, 2015';
    var originalActivities = [{
      name: 'Hyung',
      time: 15
    }];
    var updatedActivities = [{
      name: 'Hyung',
      time: 60
    }];

    superagent.post('http://localhost:8000/api/save')
      .send({
        _id: expectedDate,
        activities: originalActivities
      });

    superagent.post('http://localhost:8000/api/save')
      .send({
        _id: expectedDate,
        activities: updatedActivities
      })
      .end(function(error, response) {
        done();
      });

    superagent.get('http://localhost:8000/api/load')
      .end(function(error, response) {
        expect(response.body.length).to.equal(1);
        expect(response.body[0]._id).to.equal(expectedDate);
        expect(response.body[0].activities).to.equal(updatedActivities);
        done();
      });
  });

});
