'use strict';

angular.module('websiteApp')
    .directive('tsPubPlaceholder', ['Pub',
        function(Pub) {
            return {
                templateUrl: 'views/directives/pub/placeholder.html',
                restrict: 'EACM',
                replace: true,
                link: function postLink(scope, element, attrs) {
                    var pubs = Pub.getPlaceholder(attrs.placeholder);
                    scope.pubs = pubs;
                    console.log(pubs);
                }
            };
        }
    ]);
