'use strict';

describe('Controller: SponsorsCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var SponsorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SponsorsCtrl = $controller('SponsorsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
