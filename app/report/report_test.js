'use strict';

describe('tangSooDoJournal.report module', function() {

  beforeEach(module('tangSooDoJournal.report'));

  describe('report controller', function() {

    var reportController;

    beforeEach(inject(function(_$controller_) {
      reportController = _$controller_('ReportController');
    }));

    it('should create the report controller', function() {
      expect(reportController).not.toBeNull();
    });

  });
});
