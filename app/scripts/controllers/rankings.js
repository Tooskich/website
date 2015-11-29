'use strict';

angular.module('websiteApp')
    .controller('RankingsCtrl', ['$scope', '$routeParams', 'Ranking', 'Result',
        'Server',
        function($scope, $routeParams, Ranking, Result, Server) {
            Server.sendAnalytics();

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
            $scope.catType = cat;

            $scope.page = 1;
            $scope.nb_results = 0;
            $scope.loadPage = function(page) {
                Result.getResultLists(page, cat, function(ranks) {
                    $scope.page = page;
                    $scope.nb_results += ranks.length;

                    if (cat == 'FIS') {
                        $scope.rankings = ranks.slice(0, (ranks.length / 2));
                        $scope.rankings2 = ranks.slice((ranks.length / 2));
                    } else {
                        $scope.rankings = ranks;
                    }
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
                'overall': {
                    H: Ranking.getGeneralRanking('overall', 'H'),
                    F: Ranking.getGeneralRanking('overall', 'F')
                },
                'downhill': {
                    H: Ranking.getGeneralRanking('downhill', 'H'),
                    F: Ranking.getGeneralRanking('downhill', 'F')
                },
                'slalom': {
                    H: Ranking.getGeneralRanking('slalom', 'H'),
                    F: Ranking.getGeneralRanking('slalom', 'F')
                },
                'giant-slalom': {
                    H: Ranking.getGeneralRanking('giant-slalom', 'H'),
                    F: Ranking.getGeneralRanking('giant-slalom', 'F')
                },
                'super-g': {
                    H: Ranking.getGeneralRanking('super-g', 'H'),
                    F: Ranking.getGeneralRanking('super-g', 'F')
                },
                'combined': {
                    H: Ranking.getGeneralRanking('combined', 'H'),
                    F: Ranking.getGeneralRanking('combined', 'F')
                }
            };
            $scope.currentGeneralCategory = 'overall';
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
