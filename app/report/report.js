'use strict';

angular.module('tangSooDoJournal.report', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'report/report.html',
    controller: 'ReportController'
  });
}])

.controller('ReportController', function($http) {

  var controller = this;

  this.getActivities = function() {
    $http({
      method: 'GET',
      url: '/api/load',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {

    }, undefined);
  }

});
