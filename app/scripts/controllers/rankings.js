'use strict';

angular.module('websiteApp')
    .controller('RankingsCtrl', function($scope, $routeParams, Ranking, Result) {
        var cat = $routeParams.type;
        switch (cat) {
            case 'WC':
                $scope.cat = 'Coupe du Monde';
                break;
            case 'EC':
                $scope.cat = 'Coupe d\'Europe';
                break;
            case 'FIS':
                $scope.cat = 'Courses FIS';
                break;
            default:
                $scope.cat = 'Dernières courses';
                break;
        }
        Result.getResultLists(cat, function(ranks) {
            $scope.rankings = ranks;
        });
        $scope.generalMen = Ranking.getGeneralRanking(cat, 'H');
        $scope.generalWomen = Ranking.getGeneralRanking(cat, 'F');
    });
