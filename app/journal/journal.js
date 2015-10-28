'use strict';

angular.module('tangSooDoJournal.journal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/journal', {
    templateUrl: 'journal/journal.html',
    controller: 'JournalController'
  });
}])

.controller('JournalController', [function() {

  this.getCurrentDate = function() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  this.getClassActivities = function() {
    return ['Hyung', 'Line Drill', 'Sparring', 'Targeting', 'Hand One Steps',
            'Kick One Steps', 'Ho Sin Sul', 'Hyung Applications', 'Weapons'];
  }

}]);
