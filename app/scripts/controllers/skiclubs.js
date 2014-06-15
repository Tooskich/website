'use strict';

angular.module('websiteApp')
    .controller('SkiclubsCtrl', function($scope) {
        var latitude = 46.3514,
            longitude = 7.1581,
            setMapCenter;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                setMapCenter();
            });
        }

        setMapCenter = function() {
            $scope.map.center = {
                latitude: latitude,
                longitude: longitude,
            };
        };


        $scope.map = {
            center: {
                latitude: latitude,
                longitude: longitude,
            },
            zoom: 8,
        };
    });
