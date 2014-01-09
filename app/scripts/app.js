'use strict';

angular.module('websiteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })
      .when('/Mag', {
        templateUrl: 'views/Mag.html',
        controller: 'MagCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
