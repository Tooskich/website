'use strict';

angular.module('websiteApp')
    .directive('tsPubPlaceholder', ['Pub',
        function(Pub) {
            return {
                templateUrl: 'views/directives/pub/placeholder.html',
                restrict: 'EACM',
                scope: {
                    placeholderName: '=placeholder'
                },
                link: function postLink(scope, element, attrs) {
                    var pubs = Pub.getPlaceholder(scope.placeholderName);
                    scope.horizontal = pubs[0];
                }
            };
        }
    ]);
