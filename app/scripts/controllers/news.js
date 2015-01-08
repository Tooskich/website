'use strict';

angular.module('websiteApp')
    .controller('NewsCtrl', ['$scope', '$routeParams', 'News', 'Server',
        function($scope, $routeParams, News, Server) {
            var newsId = $routeParams.n;

            Server.sendAnalytics();

            News.getNews(function(news) {
                $scope.news = news;
                document.getElementsByTagName('title')[0].innerHTML =
                    news.title;
            }, newsId);
            $scope.disqusId = 'News' + newsId;
        }
    ]);
