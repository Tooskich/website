'use strict';

angular.module('websiteApp')
    .controller('BlogCtrl', function($scope, $routeParams, Blog) {
        var blogId = $routeParams.id;
        $scope.blogId = blogId;
        Blog.getNews(function(posts) {
            $scope.news = posts;
        }, blogId);

        Blog.getBlogger(function(blogger) {
            $scope.blogger = blogger;
        }, blogId);
    });