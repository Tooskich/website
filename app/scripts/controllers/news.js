'use strict';

angular.module('websiteApp')
	.controller('NewsCtrl', function($scope, $routeParams) {
		var newsId = $routeParams.id;
		$scope.disqusId = 'News' + newsId;
	});