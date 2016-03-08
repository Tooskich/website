'use strict';

angular.module('websiteApp')
    .directive('tsAdPlaceholder', ['Pub',
        function(Pub) {
            return {
                templateUrl: 'views/directives/core/placeholder.html',
                restrict: 'EACM',
                replace: true,
                link: function postLink(scope, element, attrs) {
                    var pubs = Pub.getPlaceholder(
                        attrs.placeholder,
                        attrs.category,
                        function (pubs) {
                            scope.ad = pubs[0];
                            scope.cat = attrs.category;
                            console.log(pubs);
                        }
                    );
                }
            };
        }
    ]);
