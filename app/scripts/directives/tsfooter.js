'use strict';

angular.module('websiteApp')
    .directive('tsFooter', function(Page, Pub) {
        return {
            templateUrl: 'views/directives/core/footer.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                Page.getPageLinks(function(links) {
                    scope.pages = links;
                });

                Pub.getHorizontalBanner(function(banners) {
                    scope.banner = banners[0];
                });
            }
        };
    });
