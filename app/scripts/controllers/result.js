'use strict';

angular.module('websiteApp')
	.controller('ResultCtrl', function($scope, $routeParams, Result) {
		var resultId = $routeParams.resultId,
			result = Result.getResult(resultId);
		$scope.headers = result.headers;
		$scope.results = result.values;
		$scope.title = result.title;
		$scope.date = result.date;
		$scope.genre = result.genre;
	});