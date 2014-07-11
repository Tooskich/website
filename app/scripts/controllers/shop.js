'use strict';

angular.module('websiteApp')
    .controller('ShopCtrl', function($scope, Angulation) {
        Angulation.getCovers(function(covers) {
            $scope.covers = covers;
        });
    });
