'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:SponsorsCtrl
 * @description
 * # SponsorsCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
    .controller('SponsorsCtrl', ['$scope', 'Widget',
        function ($scope, Widget) {
            Widget.get(2, function(widget) {
                $scope.widgetContent = widget;
            });
        }
    ]);
