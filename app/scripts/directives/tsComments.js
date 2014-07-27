'use strict';

angular.module('websiteApp')
    .directive('tsComments', [

        function() {
            window.disqus_shortname = 'tooski';
            return {
                templateUrl: 'views/directives/comments/comments.html',
                restrict: 'EACM',
                link: function postLink(scope, element, attrs) {}
            };
        }
    ]);
