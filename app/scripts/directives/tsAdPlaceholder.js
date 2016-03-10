'use strict';

angular.module('websiteApp')
    .directive('tsAdPlaceholder', ['$window', 'Pub',
        function($window, Pub) {
            return {
                templateUrl: 'views/directives/core/placeholder.html',
                restrict: 'EACM',
                replace: true,
                scope: {
                    width: '=?minWidth',
                },
                link: function postLink(scope, element, attrs) {

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

                    var pubs = Pub.getPlaceholder(
                        attrs.placeholder,
                        attrs.category,
                        function (pubs) {
                            scope.ad = pubs[0];
                            scope.cat = attrs.category;
                        }
                    );

                    angular.element($window).on('resize', checkWidth);
                }
            };
        }
    ]);
