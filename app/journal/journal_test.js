'use strict';

describe('tangSooDoJournal.journal module', function() {

  beforeEach(module('tangSooDoJournal.journal'));

  describe('journal controller', function(){

    var journalController;

    beforeEach(inject(function(_$controller_) {
      journalController = _$controller_('JournalController');
    }));

    it('should get the current date', function() {
      var expectedDateString = 'November 27, 2015';
      jasmine.clock().mockDate(new Date(expectedDateString));

      expect(journalController.getCurrentDate()).toBe(expectedDateString);
    });

    it('should contain hyung in the list of class activities', function() {
      expect(journalController.getClassActivities()).toContain('Hyung');
    });

  });
});
