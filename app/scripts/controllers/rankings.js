'use strict';

angular.module('websiteApp')
	.controller('RankingsCtrl', function($scope, $routeParams, Ranking, Result) {
		var cat = $routeParams.type;
		$scope.rankings = Result.getResultLists(cat);
		$scope.generalMen = Ranking.getGeneralRanking(cat, 'H');
		$scope.generalWomen = Ranking.getGeneralRanking(cat, 'F');
	});