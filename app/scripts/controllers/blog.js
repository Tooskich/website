'use strict';

angular.module('websiteApp')
    .controller('BlogCtrl', ['$scope', '$routeParams', 'Blog', 'Server',
        function($scope, $routeParams, Blog, Server) {
            var blogId = $routeParams.id;
            $scope.blogId = blogId;

            Server.sendAnalytics();

            Blog.getNews(function(posts) {
                $scope.news = posts;
            }, blogId);

            Blog.getBlogger(function(blogger) {
                blogger.name = blogger.name.trim();
                blogger.profilePic = blogger.profilePic ||
                    'images/site/profile.png';
                blogger.sponsors = blogger.sponsors[0] ? blogger.sponsors :
                    ['images/site/tooski.png',
                    'http://tooski.ch/assets/images/pub/cbservice.jpg',
                    'http://www.tooski.ch/assets/uploads/files/Angulation.png'
                ];
                blogger.header = blogger.header ||
                    'http://www.team-schroders.ch/uploads/media/header_img_1d527b.jpg' ||
                    'http://pics.ricardostatic.ch/2_728107126_Big/autogramme/loic-meillard-orig-ak.jpg';
                $scope.blogger = blogger;
            }, blogId);
        }
    ]);
