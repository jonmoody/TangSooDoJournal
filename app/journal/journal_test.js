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

    describe('class activities', function() {

      it('should contain hyung', function() {
        expect(journalController.getClassActivities()).toContain('Hyung');
      });

      it('should contain line drill', function() {
        expect(journalController.getClassActivities()).toContain('Line Drill');
      });

      it('should contain sparring', function() {
        expect(journalController.getClassActivities()).toContain('Sparring');
      });

      it('should contain targeting', function() {
        expect(journalController.getClassActivities()).toContain('Targeting');
      });

      it('should contain hand one steps', function() {
        expect(journalController.getClassActivities()).toContain('Hand One Steps');
      });

      it('should contain kick one steps', function() {
        expect(journalController.getClassActivities()).toContain('Kick One Steps');
      });

      it('should contain ho sin sul', function() {
        expect(journalController.getClassActivities()).toContain('Ho Sin Sul');
      });

      it('should contain hyung applications', function() {
        expect(journalController.getClassActivities()).toContain('Hyung Applications');
      });

      it('should contain weapons', function() {
        expect(journalController.getClassActivities()).toContain('Weapons');
      });

    });

  });
});
