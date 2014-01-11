'use strict';

angular.module('websiteApp')
  .controller('BlogCtrl', function ($scope, $routeParams, Blog) {
  	var blogId = $routeParams.id;
  	$scope.news = Blog.getNews(blogId);
  	$scope.CV = Blog.getCV(blogId);
  	$scope.name = Blog.getName(blogId);
  	$scope.profilePic = Blog.getProfilePic(blogId);
  	$scope.linkResults = Blog.getLinkResults(blogId);
  	// $scope.sponsors = Blog.getSponsors(blogId);
  });
