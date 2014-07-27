'use strict';

angular.module('websiteApp')
    .controller('ShopCtrl', ['$scope', 'Angulation', 'Lightbox',
        function($scope, Angulation, Lightbox) {
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
