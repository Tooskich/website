'use strict';

angular.module('websiteApp')
    .controller('BlogCtrl', function($scope, $routeParams, Blog) {
        var blogId = $routeParams.id;
        $scope.blogId = blogId;
        Blog.getNews(function(posts) {
            $scope.news = posts;
        }, blogId);

        Blog.getBlogger(function(blogger) {
            blogger.profilePic = blogger.profilePic ||
                'images/site/profile.png';
            blogger.sponsors = blogger.sponsors[0] ? blogger.sponsors :
                ['images/site/tooski.png',
                'http://tooski.ch/assets/images/pub/cbservice.jpg',
                'http://www.tooski.ch/assets/uploads/files/Angulation.png'
            ];
            $scope.blogger = blogger;
        }, blogId);
    });
