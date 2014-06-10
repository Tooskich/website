'use strict';

angular.module('websiteApp')
    .filter('plainText', function() {
        return function(text) {
        // text = String(text)
        //     .replace(/<[^>]+>/gm, '');
            return angular.element(text)
                .text();
        };
    });
