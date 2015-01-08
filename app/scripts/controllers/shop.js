'use strict';

angular.module('websiteApp')
    .controller('ShopCtrl', ['$scope', 'Angulation', 'Lightbox', 'Server',
        function($scope, Angulation, Lightbox, Server) {

            Server.sendAnalytics();

            Angulation.getCovers(function(covers) {
                covers = covers.map(function(el, index) {
                    var img = {
                        url: el.url,
                        width: 465,
                        height: 650,
                    }
                    return img;
                });
                $scope.covers = covers.reverse();
            });

            $scope.openLightboxModal = function(index) {
                Lightbox.openModal($scope.covers, index);
            };
        }
    ]);
