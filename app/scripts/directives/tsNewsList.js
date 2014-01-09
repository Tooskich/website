'use strict';

angular.module('websiteApp')
  .directive('tsNewsList', function() {
    return {
      templateUrl: 'views/directives/news/newslist.html',
      restrict: 'EACM',
      replace: true,
      scope: {
        news: '=news',
      },
      link: function postLink(scope, element, attrs) {
      },
    };
  });