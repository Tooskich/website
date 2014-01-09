'use strict';

describe('Controller: MagCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var MagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagCtrl = $controller('MagCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
