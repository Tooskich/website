'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', function($scope, $routeParams, $modal, News) {
        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };


        $scope.latestNews = [];
        News.getNews(function(set1) {
            News.getNews(function(set2) {
                $scope.latestNews = set1.concat(set2);
            }, null, 2);
        }, null, 1);

        $scope.page = 1;
        $scope.loadPage = function(number) {
            News.getNews(function(news) {
                $scope.page = number;
                $scope.news = news;
                $scope.randFirstNews = shuffle(news.slice(0, 5));

            }, null, number);
        };
        $scope.loadPage($scope.page);
    });
