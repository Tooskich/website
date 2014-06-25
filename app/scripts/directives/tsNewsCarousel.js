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
                scope.place = 0;
                scope.$watch('news', function() {
                    if (scope.news) {
                        scope.current = scope.news[scope.place];
                    }
                });

                scope.loadNews = function(place) {
                    scope.place = place;
                    scope.current = scope.news[place];
                };
            }
        };
    });
