'use strict';

angular.module('websiteApp')
    .controller('SkiclubsCtrl', function($scope, Skiclubs) {
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

        Skiclubs.get(function(data) {
            $scope.skiclubs = data;
        });

        $scope.map = {
            center: {
                latitude: latitude,
                longitude: longitude,
            },
            zoom: 8,
        };

        $scope.markerClick = function($markerModel) {
            $scope.$emit('tsChangeClub', $markerModel);
        };

        $scope.currentClub = {
            title: '',
            content: '',
            contact: '',
        };

        $scope.$on('tsChangeClub', function(event, input) {
            $scope.currentClub = input;
            $scope.$apply();
        });
    });
