var mongodb = require('mongodb').MongoClient;

'use strict';

describe('Tang Soo Do Report', function() {

  function cleanDatabase() {
    mongodb.connect('mongodb://localhost/journal', function(err, db) {
      var collection = db.collection('activities');
      collection.remove({});
    });
  }

  beforeEach(function() {
    cleanDatabase();
  });

  afterAll(function() {
    cleanDatabase();
  });

  it('can navigate to the report page', function() {
    browser.get('index.html');

    var reportMenuLink = element(by.id('report-menu-link'));
    reportMenuLink.click();

    var reportPageTitle = element(by.id('title'));

    expect(reportPageTitle.getText()).toEqual('Buckeye Tang Soo Do Report');
  });

});
