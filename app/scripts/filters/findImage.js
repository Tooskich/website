'use strict';

angular.module('websiteApp')
    .filter('findImage', function() {
        return function(input) {
            var re =
                /(https?:\/\/[A-Za-z0-9_/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;
            input = re.exec(input);
            input = !! input ? input[0] : '/images/site/tooski.png';
            return input;
        };
    });
