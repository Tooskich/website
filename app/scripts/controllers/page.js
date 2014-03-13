'use strict';

angular.module('websiteApp')
    .controller('PageCtrl', function($scope, $routeParams, Page) {
        Page.getPage(function(content) {
            $scope.page = content;
        }, $routeParams.id);
    });