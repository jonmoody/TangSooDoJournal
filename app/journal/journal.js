'use strict';

angular.module('tangSooDoJournal.journal', ['ngRoute'])

.constant('TIME_INTERVAL', 15)
.constant('MAX_TIME', 120)
.constant('MIN_TIME', 0)

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/journal', {
    templateUrl: 'journal/journal.html',
    controller: 'JournalController'
  });
}])

.controller('JournalController', function(TIME_INTERVAL, MAX_TIME, MIN_TIME) {

  var controller = this;
  this.activities = [];

  this.getCurrentDate = function() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  this.getClassActivities = function() {
    return ['Hyung', 'Line Drill', 'Sparring', 'Targeting', 'Hand One Steps',
            'Kick One Steps', 'Ho Sin Sul', 'Hyung Applications', 'Weapons'];
  }

  this.getTimeForActivity = function(activityName) {
    return controller.activities[controller.getClassActivities().indexOf(activityName)].time;
  }

  this.increaseTimeForActivity = function(activityName) {
    var index = controller.getClassActivities().indexOf(activityName);

    if (controller.activities[index].time < MAX_TIME) {
      controller.activities[index].time += TIME_INTERVAL;
    }
  }

  this.decreaseTimeForActivity = function(activityName) {
    var index = controller.getClassActivities().indexOf(activityName);

    if (controller.activities[index].time > MIN_TIME) {
      controller.activities[index].time -= TIME_INTERVAL;
    }
  }

  for (var index = 0; index < controller.getClassActivities().length; index++) {
    controller.activities.push({
      name: controller.getClassActivities()[index],
      time: MIN_TIME
    });
  }

})

.directive('classActivities', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'journal/directives/class-activities.html'
  }
});
