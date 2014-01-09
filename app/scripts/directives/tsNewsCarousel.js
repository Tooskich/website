'use strict';

angular.module('websiteApp')
    .directive('tsNewsCarousel', function() {
        return {
            templateUrl: 'views/directives/news/carousel.html',
            restrict: 'EACM',
            scope: {
                news: '=',
            },
            link: function postLink(scope, element, attrs) {
                scope.interval = 5000;
            }
        };
    });