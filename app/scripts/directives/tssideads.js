'use strict';

angular.module('websiteApp')
    .directive('tsSideAds', function($window, Pub) {
        return {
            templateUrl: 'views/directives/core/sideads.html',
            restrict: 'EACM',
            scope: {
                width: '=minWidth',
            },
            link: function postLink(scope, element, attrs) {
                function shuffle(o) { //v1.0
                    for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                        i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
                };

                var checkWidth = function(width) {
                    var width = width;
                    return function() {
                        if (width >= window.innerWidth) {
                            element.css('display', 'none');
                        }
                        else {
                            element.css('display', 'block');
                        }
                    };
                };
                checkWidth = checkWidth(scope.width);
                checkWidth();

                Pub.getVerticalBanner(function(banners) {
                    scope.ad = shuffle(banners)[0];
                });


                angular.element($window)
                    .on('resize', checkWidth);
            }
        };
    });
