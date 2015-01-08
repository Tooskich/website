'use strict';

angular.module('websiteApp')
    .directive('tsSideAds', function() {
        return {
            template: '<div>Side Ads !</div>',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                element.text('this is the tsSideAds directive');
            }
        };
    });
