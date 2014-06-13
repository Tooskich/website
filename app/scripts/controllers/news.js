'use strict';

angular.module('websiteApp')
    .controller('NewsCtrl', function($scope, $routeParams, News) {
        var newsId = $routeParams.n;
        News.getNews(function(news) {
            $scope.news = news;
        }, newsId);
        $scope.disqusId = 'News' + newsId;
    });
