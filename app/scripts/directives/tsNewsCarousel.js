'use strict';

angular.module('websiteApp')
    .directive('tsNewsCarousel', function($timeout) {
        return {
            templateUrl: 'views/directives/news/carousel.html',
            restrict: 'EACM',
            scope: {
                news: '=',
            },
            link: function postLink(scope, element, attrs) {
                var timeout,
                    changeNews,
                    cancelChange,
                    interval = 2000;

                scope.changeNews = function() {
                    var length = scope.news.length || 1;
                    scope.place = (scope.place + 1) % length;
                    scope.current = scope.news[scope.place];
                    scope.cancelChange();
                    timeout = $timeout(scope.changeNews, interval);
                };

                $timeout(scope.changeNews, interval);

                scope.cancelChange = function() {
                    $timeout.cancel(timeout);
                }

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
