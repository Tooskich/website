'use strict';

angular.module('websiteApp')
    .controller('RankingsCtrl', function($scope, $routeParams, Ranking, Result) {
        var cat = $routeParams.type;
        Result.getResultLists(cat, function(ranks) {
            $scope.rankings = ranks;
        });
        $scope.generalMen = Ranking.getGeneralRanking(cat, 'H');
        $scope.generalWomen = Ranking.getGeneralRanking(cat, 'F');
    });
