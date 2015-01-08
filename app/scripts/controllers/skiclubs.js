'use strict';

angular.module('websiteApp')
    .controller('SkiclubsCtrl', ['$scope', 'Skiclubs', 'Widget', 'Server',
        function($scope, Skiclubs, Widget, Server) {
            var latitude = 46.3514,
                longitude = 7.1581,
                setMapCenter;

            Server.sendAnalytics();

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

            $scope.markerClick = function(skiclub) {
                $scope.currentClub = skiclub;
                $scope.$apply();
            };

            $scope.currentClub = {
                title: '',
                content: '',
                contact: '',
            };
        }
    ]);
