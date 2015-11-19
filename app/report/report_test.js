'use strict';

describe('tangSooDoJournal.report module', function() {

  beforeEach(module('tangSooDoJournal.report'));

  describe('report controller', function() {

    var reportController;
    var $httpBackend;

    beforeEach(inject(function(_$controller_, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      reportController = _$controller_('ReportController');
    }));

    it('should create the report controller', function() {
      expect(reportController).not.toBeNull();
    });

    it('should retrieve the list of completed activites when the controller is created', function() {
      var expectedData = {
        data: [
          {
            _id: 'February 1, 2015',
            activities: [{
              name: 'Hyung',
              time: 15
            }]
          },
          {
            _id: 'February 3, 2015',
            activities: [{
              name: 'Hyung',
              time: 30
            }]
          }
        ]
      }

      $httpBackend.whenGET('/api/load').respond(expectedData, '');
      reportController.getActivities();
      $httpBackend.flush();

      expect(reportController.activities.data).toEqual(expectedData.data);
    });

  });
});
