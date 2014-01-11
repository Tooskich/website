'use strict';

describe('Controller: RankingsCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var RankingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankingsCtrl = $controller('RankingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
