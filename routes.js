var mongodb = require('mongodb')
  , MongoClient = mongodb.MongoClient;

module.exports = function(app) {

  app.get('/api/load', function(req, res) {
    MongoClient.connect('mongodb://localhost/journal', function(err, db) {
      var collection = db.collection('activities');

      collection.find({}).toArray(function(err, documents) {
        res.send(documents);
      });
    });
  });

  app.post('/api/save', function(req, res) {
    MongoClient.connect('mongodb://localhost/journal', function(err, db) {
      var collection = db.collection('activities');

      collection.insert({
        name: 'TestRecord'
      });
    });
    res.send('Saved successfully');
  });

};
