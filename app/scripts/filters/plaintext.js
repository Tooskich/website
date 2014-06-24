'use strict';

angular.module('websiteApp')
    .filter('plainText', function($filter) {
        return function(text, length, end) {
            text = String(text)
                .replace(/<[^>]+>|&nbsp;/gm, '');
            // text = angular.element(text)
            //     .text();
            return length ? $filter('truncate')(text, length) : text;
        };
    });
