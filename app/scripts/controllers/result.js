'use strict';

angular.module('websiteApp')
    .controller('ResultCtrl', ['$scope', '$routeParams', 'Result',
        function($scope, $routeParams, Result) {
            var resultId = $routeParams.resultId;
            Result.getResult(resultId, function(result) {
                $scope.headers = result.headers;
                $scope.result = result;
                $scope.content = result.table;
                $scope.title = result.title;
                $scope.date = result.date;
                $scope.genre = result.genre;
            });
        }
    ]);
