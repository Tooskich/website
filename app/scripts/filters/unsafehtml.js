'use strict';

angular.module('websiteApp')
    .filter('unsafeHtml', function($sce) {
        return function(input) {
            return $sce.trustAsHtml(input);
        };
    });
