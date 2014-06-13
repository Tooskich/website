'use strict';

angular.module('websiteApp')
    .directive('tsWidgetBar', function(Ranking, Widget, Pub) {
        return {
            templateUrl: 'views/directives/core/widgetBar.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                scope.genRanking = Ranking.getGeneralRanking();

                Widget.get(function(data) {
                    scope.widgetContent = data;
                });

                Pub.getSquareBanner(function(square) {
                    scope.ads = square.slice(0, 2);
                });
            }
        };
    });
