'use strict';

angular.module('websiteApp')
  .controller('RankingsCtrl', function ($scope, $routeParams, Ranking) {
  	$scope.rankings = Ranking.getRankings($routeParams.type);
  });
