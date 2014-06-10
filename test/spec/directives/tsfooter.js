'use strict';

describe('Directive: tsFooter', function () {

  // load the directive's module
  beforeEach(module('websiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ts-footer></ts-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tsFooter directive');
  }));
});
