'use strict';

angular.module('tangSooDoJournal.report', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'report/report.html',
    controller: 'ReportController'
  });
}])

.controller('ReportController', function() {

});
