'use strict';

angular.module('websiteApp')
  .directive('NewsFeed', function () {
    return {
      templateUrl: '',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the NewsFeed directive');
      }
    };
  });
