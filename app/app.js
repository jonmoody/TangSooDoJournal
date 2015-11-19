'use strict';

angular.module('tangSooDoJournal', [
  'ngRoute',
  'tangSooDoJournal.journal'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'journal/journal.html',
      controller: 'JournalController'
    })
    .when('/report', {
      templateUrl: 'report/report.html',
      controller: 'ReportController'
    })
    .otherwise({
      redirectTo: '/journal'
    });
}]);
