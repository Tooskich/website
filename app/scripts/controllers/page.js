'use strict';

angular.module('websiteApp')
    .controller('PageCtrl', ['$scope', '$routeParams', 'Page',
        function($scope, $routeParams, Page) {
            Page.getPage(function(page) {
                $scope.page = page.content;
            }, $routeParams.id);
        }
    ]);
