'use strict';

angular.module('websiteApp')
    .controller('PageCtrl', function($scope, $routeParams, Page) {
        Page.getPage(function(page) {
            $scope.page = page.content;
        }, $routeParams.id);
    });
