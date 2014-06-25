'use strict';

angular.module('websiteApp')
    .controller('ResultCtrl', function($scope, $routeParams, Result) {
        var resultId = $routeParams.resultId;
        Result.getResult(resultId, function(result) {
            $scope.headers = result.headers;
            $scope.result = result;
            $scope.content = result.content;
            $scope.title = result.title;
            $scope.date = result.date;
            $scope.genre = result.genre;
        });
    });
