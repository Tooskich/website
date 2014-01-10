'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', function($scope, News) {
        $scope.news = News.getNews();
    });