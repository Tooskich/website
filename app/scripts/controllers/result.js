'use strict';

angular.module('websiteApp')
    .controller('ResultCtrl', ['$scope', '$routeParams', 'Result',
        function($scope, $routeParams, Result) {
            var resultId = $routeParams.resultId;
            Result.getResult(resultId, function(result) {
                $scope.cat = result.category;
                $scope.discipline = result.discipline;
                $scope.info = result.info;
                $scope.date = result.date;
                $scope.location = result.location;
                $scope.link = result.link;
                $scope.genre = result.genre;
                // document.getElementById('table-content')
                //     .innerHTML = result.table;
                angular.element('#table-content')
                    .html(result.table)
                    .find('table')
                    .addClass('table table-striped table-condensed');
            });
        }
    ]);
