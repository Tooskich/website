'use strict';

angular.module('websiteApp')
  .controller('ResultCtrl', function ($scope, $routeParams, Result) {
  	var resultId = $routeParams.id,
  	result = Result.getResult(resultId);
  	$scope.headers = result.headers;
  	$scope.results = result.values;
  });
