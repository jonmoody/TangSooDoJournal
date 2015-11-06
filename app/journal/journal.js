'use strict';

angular.module('tangSooDoJournal.journal', ['ngRoute'])

.constant('TIME_INTERVAL', 15)
.constant('MAX_TIME', 120)
.constant('MIN_TIME', 0)
.constant('ACTIVITY_NAMES', ['Hyung', 'Line Drill', 'Sparring', 'Targeting',
                            'Hand One Steps', 'Kick One Steps', 'Ho Sin Sul',
                            'Hyung Applications', 'Weapons'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/journal', {
    templateUrl: 'journal/journal.html',
    controller: 'JournalController'
  });
}])

.controller('JournalController', function($http, TIME_INTERVAL, MAX_TIME, MIN_TIME, ACTIVITY_NAMES) {

  var controller = this;
  this.activities = [];

  this.getCurrentDate = function() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  this.getTimeForActivity = function(activityName) {
    return controller.activities[ACTIVITY_NAMES.indexOf(activityName)].time;
  }

  this.increaseTimeForActivity = function(activityName) {
    var index = ACTIVITY_NAMES.indexOf(activityName);

    if (controller.activities[index].time < MAX_TIME) {
      controller.activities[index].time += TIME_INTERVAL;
    }
  }

  this.decreaseTimeForActivity = function(activityName) {
    var index = ACTIVITY_NAMES.indexOf(activityName);

    if (controller.activities[index].time > MIN_TIME) {
      controller.activities[index].time -= TIME_INTERVAL;
    }
  }

  this.saveActivities = function() {
    var request = {
      method: 'POST',
      url: '/api/save',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        date: controller.getCurrentDate(),
        activities: controller.activities
      }
    }

    $http(request);
  }

  this.getActivitiesForToday = function() {
    $http({
      method: 'GET',
      url: '/api/load',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        date: controller.getCurrentDate()
      }
    }).then(function successCallback(response) {
      if (response.data.length > 0) {
        controller.activities = response.data[response.data.length - 1].activities;
      }
    }, undefined);
  }

  for (var index = 0; index < ACTIVITY_NAMES.length; index++) {
    controller.activities.push({
      name: ACTIVITY_NAMES[index],
      time: MIN_TIME
    });
  }

  this.getActivitiesForToday();

})

.directive('classActivities', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'journal/directives/class-activities.html'
  }
});
