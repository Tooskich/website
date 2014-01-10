'use strict';

angular.module('websiteApp')
  .directive('tsNavbar', function () {
    return {
      templateUrl: 'views/directives/core/navbar.html',
      restrict: 'EACM',
      replace: true,
      link: function postLink(scope, element, attrs) {
      	// TODO: When person clicks on button, then add the active class
      }
    };
  });
