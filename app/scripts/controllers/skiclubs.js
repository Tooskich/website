'use strict';

angular.module('websiteApp')
    .controller('SkiclubsCtrl', function($scope) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
    });
