'use strict';

angular.module('websiteApp')
    .filter('findImage', function() {
        return function(input) {
            var re = /http:\/\/.+?\.jpg|jpeg/gi;
            return re.exec(input) || '/images/Sflocon_vecteur_Transparent.png';
        };
    });