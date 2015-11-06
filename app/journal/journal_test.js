'use strict';

describe('tangSooDoJournal.journal module', function() {

  beforeEach(module('tangSooDoJournal.journal'));

  describe('journal controller', function(){

    var journalController;
    var ACTIVITY_NAMES;
    var $httpBackend;

    beforeEach(inject(function(_$controller_, _ACTIVITY_NAMES_, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      ACTIVITY_NAMES = _ACTIVITY_NAMES_;

      $httpBackend.when('GET', '/api/load').respond('', '');
      journalController = _$controller_('JournalController');
      $httpBackend.flush();
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
      var activityName = ACTIVITY_NAMES[0];
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

    it('should not be able to increase the time of an activity above 120 minutes', function() {
      var activityName = ACTIVITY_NAMES[0];
      journalController.activities[0] = {
        name: activityName,
        time: 120
      };

      journalController.increaseTimeForActivity(activityName);

      expect(journalController.getTimeForActivity(activityName)).toEqual(120);
    });

    it('should post the list of activities with the current date when the journal is saved', function() {
      var expectedDateString = 'December 10, 2015';
      jasmine.clock().mockDate(new Date(expectedDateString));

      var expectedData = {
        date: expectedDateString,
        activities: journalController.activities
      }

      $httpBackend.expectPOST('/api/save', expectedData).respond(200, '');
      journalController.saveActivities();
      $httpBackend.flush();
    });

    it('should retrieve the saved data for the current date', function() {
      var expectedDateString = 'December 15, 2015';
      jasmine.clock().mockDate(new Date(expectedDateString));

      var expectedData = {
        date: expectedDateString,
        activities: journalController.activities
      }

      $httpBackend.when('GET', '/api/load').respond(expectedData, '');
      journalController.getActivities();
      $httpBackend.flush();
    });

    describe('class activities', function() {

      it('should contain hyung', function() {
        expect(ACTIVITY_NAMES).toContain('Hyung');
      });

      it('should contain line drill', function() {
        expect(ACTIVITY_NAMES).toContain('Line Drill');
      });

      it('should contain sparring', function() {
        expect(ACTIVITY_NAMES).toContain('Sparring');
      });

      it('should contain targeting', function() {
        expect(ACTIVITY_NAMES).toContain('Targeting');
      });

      it('should contain hand one steps', function() {
        expect(ACTIVITY_NAMES).toContain('Hand One Steps');
      });

      it('should contain kick one steps', function() {
        expect(ACTIVITY_NAMES).toContain('Kick One Steps');
      });

      it('should contain ho sin sul', function() {
        expect(ACTIVITY_NAMES).toContain('Ho Sin Sul');
      });

      it('should contain hyung applications', function() {
        expect(ACTIVITY_NAMES).toContain('Hyung Applications');
      });

      it('should contain weapons', function() {
        expect(ACTIVITY_NAMES).toContain('Weapons');
      });

    });

  });
});
