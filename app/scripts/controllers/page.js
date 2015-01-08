'use strict';

angular.module('websiteApp')
    .controller('PageCtrl', ['$scope', '$routeParams', 'Page', 'Server',
        function($scope, $routeParams, Page, Server) {
            Server.sendAnalytics();

            Page.getPage(function(page) {
                $scope.page = page.content;
            }, $routeParams.id);
        }
    ]);
