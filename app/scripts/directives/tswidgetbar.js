'use strict';

angular.module('websiteApp')
    .directive('tsWidgetBar', function(Ranking) {
        return {
            templateUrl: 'views/directives/core/widgetBar.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                scope.genRanking = Ranking.getGeneralRanking();
            }
        };
    });
