'use strict';

angular.module('websiteApp')
  .controller('PageCtrl', function ($scope,$routeParams, Page) {
    $scope.page = Page.getPage($routeParams.id);
  });
