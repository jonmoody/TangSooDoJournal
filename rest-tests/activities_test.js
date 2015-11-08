var superagent = require('superagent');
var expect = require('expect.js');
var mongodb = require('mongodb').MongoClient;

var BASE_URL = 'http://localhost:8000/';
var LOAD_URL = BASE_URL + 'api/load';
var SAVE_URL = BASE_URL + 'api/save';

describe('activities rest api', function() {

  function cleanDatabase(done) {
    mongodb.connect('mongodb://localhost/journal', function(err, db) {
      var collection = db.collection('activities');
      collection.remove({}, function() {
        done();
      });
    });
  }

  beforeEach(function(done) {
    cleanDatabase(done);
  });

  after(function(done) {
    cleanDatabase(done);
  });

  it('can access the endpoint for loading activities', function(done) {
    superagent.get(LOAD_URL)
      .end(function(error, response) {
        expect(error).to.equal(null);
        expect(response.status).to.equal(200);
        done();
      });
  });

  it('can access the endpoint for saving activities', function(done) {
    var expectedDate = 'January 1, 2015';
    var expectedActivities = [{
      name: 'Hyung',
      time: 15
    }];

    superagent.post(SAVE_URL)
      .send({
        date: expectedDate,
        activities: expectedActivities
      })
      .end(function(error, response) {
        expect(error).to.equal(null);
        expect(response.body.message).to.equal('Saved successfully.');
        done();
      });
  });

  it('can retrieve data from the database', function(done) {
    var expectedDate = 'January 1, 2015';
    var expectedActivities = [{
      name: 'Hyung',
      time: 15
    }];

    superagent.post(SAVE_URL)
      .send({
        date: expectedDate,
        activities: expectedActivities
      })
      .end(function() {
        superagent.get(LOAD_URL)
          .end(function(error, response) {
            expect(response.body.length).to.equal(1);
            expect(response.body[0]._id).to.equal(expectedDate);
            expect(response.body[0].activities).to.eql(expectedActivities);
            done();
          });
      });
  });

  it('will update an existing record if the data was already posted on the same day', function(done) {
    var expectedDate = 'January 1, 2015';
    var originalActivities = [{
      name: 'Hyung',
      time: 15
    }];
    var updatedActivities = [{
      name: 'Hyung',
      time: 60
    }];

    superagent.post(SAVE_URL)
      .send({
        date: expectedDate,
        activities: originalActivities
      })
      .end(function() {
        superagent.post(SAVE_URL)
          .send({
            date: expectedDate,
            activities: updatedActivities
          })
          .end(function() {
            superagent.get(LOAD_URL)
              .end(function(error, response) {
                expect(response.body.length).to.equal(1);
                expect(response.body[0]._id).to.equal(expectedDate);
                expect(response.body[0].activities).to.eql(updatedActivities);
                done();
              });
          });
      });
  });

  it('will store a separate record for each day in the database', function(done) {
    var firstDate = 'January 1, 2015';
    var secondDate = 'January 2, 2015';
    var activities = [{
      name: 'Hyung',
      time: 15
    }];

    superagent.post(SAVE_URL)
      .send({
        date: firstDate,
        activities: activities
      })
      .end(function() {
        superagent.post(SAVE_URL)
          .send({
            date: secondDate,
            activities: activities
          })
          .end(function(error, response) {
            superagent.get(LOAD_URL)
              .end(function(error, response) {
                expect(response.body.length).to.equal(2);
                done();
              });
          });
      });
  });

});
