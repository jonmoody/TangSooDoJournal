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

    it('should default the class activities to 0 minutes', function() {
      expect(journalController.getTimeForActivity('Hyung')).toEqual(0);
      expect(journalController.getTimeForActivity('Line Drill')).toEqual(0);
      expect(journalController.getTimeForActivity('Sparring')).toEqual(0);
      expect(journalController.getTimeForActivity('Targeting')).toEqual(0);
      expect(journalController.getTimeForActivity('Hand One Steps')).toEqual(0);
      expect(journalController.getTimeForActivity('Kick One Steps')).toEqual(0);
      expect(journalController.getTimeForActivity('Ho Sin Sul')).toEqual(0);
      expect(journalController.getTimeForActivity('Hyung Applications')).toEqual(0);
      expect(journalController.getTimeForActivity('Weapons')).toEqual(0);
    });

    it('should increase the time of an activity by 15 minutes', function() {
      var activityName = 'Hyung';
      journalController.increaseTimeForActivity(activityName);

      expect(journalController.getTimeForActivity(activityName)).toEqual(15);
    });

    it('should decrease the time of an activity by 15 minutes', function() {
      var activityName = journalController.getClassActivities()[0];
      journalController.activities[0] = {
        name: activityName,
        time: 15
      };

      journalController.decreaseTimeForActivity(activityName);

      expect(journalController.getTimeForActivity(activityName)).toEqual(0);
    });

    it('should not be able to decrease the time of an activity below 0 minutes', function() {
      var activityName = 'Hyung';
      journalController.decreaseTimeForActivity(activityName);

      expect(journalController.getTimeForActivity(activityName)).toEqual(0);
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
