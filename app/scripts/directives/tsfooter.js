'use strict';

angular.module('websiteApp')
    .directive('tsFooter', function(Page, Pub) {
        return {
            templateUrl: 'views/directives/core/footer.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {

                var shuffleArray = function shuffle(o) { //v1.0
                    for (var j, x, i = o.length; i; j = Math.floor(Math
                        .random() *
                        i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
                };

                Page.getPageLinks(function(links) {
                    scope.pages = links;
                });

                Pub.getHorizontalBanner(function(banners) {
                    scope.banner = shuffleArray(banners)[0];
                });
            }
        };
    });
