'use strict';

angular.module('websiteApp')
    .directive('tsSideAds', function(Pub) {
        return {
            templateUrl: 'views/directives/core/sideads.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                function shuffle(o) { //v1.0
                    for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                        i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
                };

                Pub.getVerticalBanner(function(banners) {
                    scope.ad = shuffle(banners)[0];
                })
            }
        };
    });
