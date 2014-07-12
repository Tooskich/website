'use strict';

angular.module('websiteApp')
    .controller('ShopCtrl', function($scope, Angulation, Lightbox) {
        Angulation.getCovers(function(covers) {
            covers = covers.map(function(el, index) {
                var img = {
                    url: el.url,
                    width: 465,
                    height: 650,
                    caption: 'Angulation n°' + (index + 1),
                }
                return img;
            });
            $scope.covers = covers.reverse();
        });

        $scope.openLightboxModal = function(index) {
            Lightbox.openModal($scope.covers, index);
        };
    });
