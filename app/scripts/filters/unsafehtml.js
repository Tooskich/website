'use strict';

angular.module('websiteApp')
    .filter('unsafeHtml', ['$sce',
        function($sce) {
            return function(input) {
                return $sce.trustAsHtml(input);
            };
        }
    ]);
