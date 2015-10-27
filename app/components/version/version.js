'use strict';

angular.module('tangSooDoJournal.version', [
  'tangSooDoJournal.version.interpolate-filter',
  'tangSooDoJournal.version.version-directive'
])

.value('version', '0.1');
