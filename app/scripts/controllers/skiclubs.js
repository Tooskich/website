'use strict';

angular.module('websiteApp')
    .controller('SkiclubsCtrl', function($scope, Skiclubs, Widget) {
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

        Widget.get(2, function(widget) {
            $scope.widgetContent = widget;
        });

        $scope.map = {
            center: {
                latitude: latitude,
                longitude: longitude,
            },
            zoom: 8,
            draggable: true,
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
