'use strict';

angular.module('tangSooDoJournal', [
  'ngRoute',
  'tangSooDoJournal.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
