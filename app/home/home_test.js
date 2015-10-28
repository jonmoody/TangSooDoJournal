'use strict';

describe('tangSooDoJournal.home module', function() {

  beforeEach(module('tangSooDoJournal.home'));

  describe('home controller', function(){

    it('should get the current date', inject(function($controller) {
      var homeController = $controller('HomeController');
      var expectedDateString = 'November 27, 2015';

      jasmine.clock().mockDate(new Date(expectedDateString));

      expect(homeController.getCurrentDate()).toBe(expectedDateString);
    }));

  });
});
