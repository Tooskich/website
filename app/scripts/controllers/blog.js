'use strict';

angular.module('websiteApp')
    .controller('BlogCtrl', function($scope, $routeParams, Blog) {
        var blogId = $routeParams.id;
        $scope.blogId = blogId;
        $scope.news = Blog.getNews(blogId);

        Blog.getBlogger(function(blogger) {
            $scope.blogger = blogger;
        }, blogId);
    });