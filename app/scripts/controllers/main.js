'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', function($scope, $routeParams, $modal, News) {
        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

        var news = News.getNews();
        $scope.news = news;
        $scope.randFirstNews = shuffle(news.slice(0, 5));


        if (parseInt($routeParams.n) || $routeParams.n === '0') {

            var modalInstance = $modal.open({
                templateUrl: 'news-modal.html',
                controller: function($scope, $routeParams,
                    $modalInstance, News) {

                    var newsId = parseInt($routeParams.n),
                        news = News.getNews(newsId);

                    $scope.news = news;

                    $scope.disqusId = 'News' + newsId;

                    $scope.close = function() {
                        $modalInstance.close();
                    };

                },
            });

        }
    });