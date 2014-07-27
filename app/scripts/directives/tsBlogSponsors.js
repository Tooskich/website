'use strict';

angular.module('websiteApp')
    .directive('tsBlogSponsors', ['Blog',
        function(Blog) {
            return {
                templateUrl: 'views/directives/blog/sponsors.html',
                restrict: 'EACM',
                scope: {
                    sponsors: '=sponsors',
                },
                link: function postLink(scope, element, attrs) {}
            };
        }
    ]);
