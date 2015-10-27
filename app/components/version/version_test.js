'use strict';

describe('tangSooDoJournal.version module', function() {
  beforeEach(module('tangSooDoJournal.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
