'use strict';

angular.module('websiteApp')
  .directive('tsRankingGeneral', function () {
    return {
      templateUrl: 'views/directives/ranking/general.html',
      restrict: 'EACM',
      scope: {
      	generalRanking: '=ranking',
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
