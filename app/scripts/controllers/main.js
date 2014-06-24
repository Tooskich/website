'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', function($scope, $routeParams, $modal, News) {
        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

        var news = [];
        News.getNews(function(response) {
            news = response;
            debugger;
            $scope.news = news;
            $scope.randFirstNews = shuffle(news.slice(0, 5));
        }, null, 1);



        if (parseInt($routeParams.n) || $routeParams.n === '0') {

            var modalInstance = $modal.open({
                templateUrl: 'news-modal.html',
                controller: ['$scope', '$routeParams', '$modalInstance',
                    'News',
                    function($scope, $routeParams, $modalInstance, News) {

                        var newsId = parseInt($routeParams.n);
                        News.getNews(function(response) {

                            news = response;

                            $scope.news = news;

                            $scope.disqusId = 'News' + newsId;

                            $scope.close = function() {
                                $modalInstance.close();
                            };

                        }, newsId);

                    }
                ],
            });

        }
    });
