'use strict';

angular.module('websiteApp')
    .controller('ResultCtrl', ['$scope', '$routeParams', 'Result', 'Server',
        function($scope, $routeParams, Result, Server) {
            var resultId = $routeParams.resultId;

            Server.sendAnalytics();

            Result.getResult(resultId, function(result) {
                $scope.cat = result.category;
                $scope.discipline = result.discipline;
                $scope.info = result.info;
                $scope.date = result.date;
                $scope.location = result.location;
                $scope.link = result.link;
                $scope.genre = result.genre;
                angular.element('#table-content')
                    .html(result.table)
                    .find('table')
                    .addClass('table table-striped table-condensed');
                // Hack to hide 'FIS Code' column
                if (angular.element('#table-content tr:first() th').length > 8) {
                    var fis = angular.element('#table-content th:contains("FIS Code")');
                    var index = fis.parent().children().index(fis);
                    angular.element('#table-content tr').find('th:nth(' + index + ')').hide();
                    angular.element('#table-content tr').find('td:nth(' + index + ')').hide();
                }

            });
        }
    ]);
