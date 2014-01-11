'use strict';

angular.module('websiteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ngDisqus',
])
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/Rankings', {
        templateUrl: 'views/rankings.html',
        controller: 'RankingsCtrl'
      })
      .when('/Blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(false).hashPrefix('!');
  });