'use strict';

angular.module('websiteApp')
    .controller('NewsCtrl', ['$scope', '$routeParams', 'News',
        function($scope, $routeParams, News) {
            var newsId = $routeParams.n;
            News.getNews(function(news) {
                $scope.news = news;
                document.getElementsByTagName('title')[0].innerHTML =
                    news.title;
            }, newsId);
            $scope.disqusId = 'News' + newsId;
        }
    ]);
