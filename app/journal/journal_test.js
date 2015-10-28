'use strict';

describe('tangSooDoJournal.journal module', function() {

  beforeEach(module('tangSooDoJournal.journal'));

  describe('journal controller', function(){

    it('should get the current date', inject(function($controller) {
      var homeController = $controller('JournalController');
      var expectedDateString = 'November 27, 2015';

      jasmine.clock().mockDate(new Date(expectedDateString));

      expect(homeController.getCurrentDate()).toBe(expectedDateString);
    }));

  });
});
