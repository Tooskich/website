'use strict';

angular
    .module('websiteApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.bootstrap',
        'ngDisqus',
        'google-maps',
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'MainCtrl'
            })
            .when('/Mag', {
                templateUrl: 'views/index.html',
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
            .when('/Page', {
                templateUrl: 'views/page.html',
                controller: 'PageCtrl'
            })
            .when('/Result', {
                templateUrl: 'views/result.html',
                controller: 'ResultCtrl'
            })
            .when('/Skiclubs', {
                templateUrl: 'views/skiclubs.html',
                controller: 'SkiclubsCtrl'
            })
            .when('/Shop', {
              templateUrl: 'views/shop.html',
              controller: 'ShopCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(false)
            .hashPrefix('!');
    });
