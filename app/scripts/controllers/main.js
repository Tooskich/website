'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', ['$scope', '$routeParams', 'News', 'Server',
        function($scope, $routeParams, News, Server) {
            function shuffle(o) { //v1.0
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                    i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };

            Server.sendAnalytics();

            $scope.latestNews = [];

            $scope.$watch('page', function(value) {
                News.getNews(function(set1) {
                    News.getNews(function(set2) {
                        $scope.latestNews = set1.concat(set2);
                    }, null, value + 2);
                }, null, value + 1);

            });

            $scope.page = 1;

            $scope.loadPage = function(number) {
                News.getNews(function(news) {
                    $scope.page = number;
                    $scope.news = news;
                    $scope.randFirstNews = shuffle(news.slice(0, 5));

                }, null, number);
            };
            $scope.loadPage($scope.page);
        }
    ]);
