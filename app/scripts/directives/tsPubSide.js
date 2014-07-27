'use strict';

angular.module('websiteApp')
    .directive('tsPubSide', ['Pub',
        function(Pub) {
            return {
                templateUrl: 'views/directives/pub/side.html',
                restrict: 'EACM',
                link: function postLink(scope, element, attrs) {
                    var verticals = Pub.getVerticalBanner(),
                        squares = Pub.getSquareBanner();
                    scope.vertical = verticals[0];
                    scope.square1 = squares[0];
                    scope.square2 = squares.length > 1 ? squares[1] :
                        squares[0];
                }
            };
        }
    ]);
