'use strict';

angular.module('websiteApp')
	.controller('RankingsCtrl', function($scope, $routeParams, Ranking) {
		var cat = $routeParams.type;
		$scope.rankings = Ranking.getRankings(cat);
		$scope.generalMen = Ranking.getGeneralRanking(cat, 'H');
		$scope.generalWomen = Ranking.getGeneralRanking(cat, 'F');
	});