'use strict';

angular.module('tangSooDoJournal.journal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/journal', {
    templateUrl: 'journal/journal.html',
    controller: 'JournalController'
  });
}])

.controller('JournalController', [function() {

  var controller = this;
  var activities = [];

  this.getCurrentDate = function() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  this.getClassActivities = function() {
    return ['Hyung', 'Line Drill', 'Sparring', 'Targeting', 'Hand One Steps',
            'Kick One Steps', 'Ho Sin Sul', 'Hyung Applications', 'Weapons'];
  }

  this.getTimeForActivity = function(activityName) {
    return activities[controller.getClassActivities().indexOf(activityName)].time;
  }

  this.increaseTimeForActivity = function(activityName) {
    activities[controller.getClassActivities().indexOf(activityName)].time += 15;
  }

  for (var index = 0; index < controller.getClassActivities().length; index++) {
    activities.push({
      name: controller.getClassActivities()[index],
      time: 0
    });
  }

}])

.directive('classActivities', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'journal/directives/class-activities.html'
  }
}]);
