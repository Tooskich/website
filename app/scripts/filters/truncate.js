'use strict';

angular.module('websiteApp')
  .filter('truncate', function () {
    return function (input) {
      return 'truncate filter: ' + input;
    };
  });
