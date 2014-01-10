'use strict';

angular.module('websiteApp')
	.controller('NewsCtrl', function($scope, $routeParams, News) {
		var newsId = $routeParams.id;
		$scope.news = News.getNews(newsId);
		$scope.disqusId = 'News' + newsId;
	});