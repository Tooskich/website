'use strict';

angular.module('websiteApp')
  .filter('unsafeHtml', function () {
    return function (input) {
      return 'unsafeHtml filter: ' + input;
    };
  });
