'use strict';

angular.module('websiteApp')
    .controller('RankingsCtrl', ['$scope', '$routeParams', 'Ranking', 'Result',
        function($scope, $routeParams, Ranking, Result) {
            var cat = $routeParams.type;
            switch (cat) {
                case 'WC':
                    $scope.icon = 'world-cup.png';
                    $scope.cat = 'Coupe du Monde';
                    break;
                case 'EC':
                    $scope.icon = 'europe-cup.png';
                    $scope.cat = 'Coupe d\'Europe';
                    break;
                case 'FIS':
                    $scope.icon = 'fis.png';
                    $scope.cat = 'Courses FIS';
                    break;
                default:
                    $scope.icon = 'ski-icon.png';
                    $scope.cat = 'Dernières courses';
                    break;
            }

            $scope.page = 1;
            $scope.loadPage = function(page) {
                Result.getResultLists(page, cat, function(ranks) {
                    $scope.page = page;
                    $scope.rankings = ranks;
                });
            };
            $scope.loadPage($scope.page);

            /**
             * Note: to change for each discipline, you have to load them in
             * generalRankings, with different letters. (G = General)
             * Then add the linking in the model and when there is a click, then
             * change the value of currentGeneralCategory to the different letter.
             * The change should operate automatically.
             * @type {Object}
             */
            $scope.generalRankings = {
                G: {
                    H: Ranking.getGeneralRanking(cat, 'H'),
                    F: Ranking.getGeneralRanking(cat, 'F')
                }
            };
            $scope.currentGeneralCategory = 'G';
            $scope.currentGeneralGenre = 'H';
            $scope.currentGeneralRanking = $scope.generalRankings[$scope.currentGeneralCategory]
            [$scope.currentGeneralGenre];
            $scope.$watch('currentGeneralCategory', function(event, value) {
                $scope.currentGeneralRanking = $scope.generalRankings[
                    $scope.currentGeneralCategory][$scope.currentGeneralGenre];

            });
            $scope.$watch('currentGeneralGenre', function(event, value) {
                $scope.currentGeneralRanking = $scope.generalRankings[
                    $scope.currentGeneralCategory][$scope.currentGeneralGenre];
            });
        }
    ]);
