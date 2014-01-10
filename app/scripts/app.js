'use strict';

angular.module('websiteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ngDisqus',
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
      .when('/News', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
