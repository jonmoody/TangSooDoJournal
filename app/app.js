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
    .otherwise({
      redirectTo: '/journal'
    });
}]);
