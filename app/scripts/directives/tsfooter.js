'use strict';

angular.module('websiteApp')
    .directive('tsFooter', function() {
        return {
            templateUrl: 'views/directives/core/footer.html',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {}
        };
    });
