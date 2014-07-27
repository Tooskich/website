'use strict';

angular.module('websiteApp')
    .directive('tsWidgetBar', ['Ranking', 'Widget', 'Pub',
        function(Ranking, Widget, Pub) {
            return {
                templateUrl: 'views/directives/core/widgetBar.html',
                restrict: 'EACM',
                link: function postLink(scope, element, attrs) {

                    Widget.get(1, function(data) {
                        scope.widgetContent = data;
                    });

                    Pub.getSquareBanner(function(square) {
                        scope.ads = square.slice(0, 2);
                    });

                    scope.$watch('menRanking', function() {
                        if (scope.menRanking) {
                            scope.genRanking = Ranking.getGeneralRanking(
                                null, 'H')
                                .slice(0, 5);
                        }
                        else {
                            scope.genRanking = Ranking.getGeneralRanking(
                                null, 'F')
                                .slice(0, 5);
                        }
                    });
                }
            };
        }
    ]);
