'use strict';

angular.module('websiteApp')
    .controller('BlogCtrl', ['$scope', '$routeParams', 'Blog',
        function($scope, $routeParams, Blog) {
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
                blogger.header = blogger.header ||
                    'http://www.team-schroders.ch/uploads/media/header_img_1d527b.jpg' ||
                    'http://pics.ricardostatic.ch/2_728107126_Big/autogramme/loic-meillard-orig-ak.jpg';
                $scope.blogger = blogger;
            }, blogId);
        }
    ]);
