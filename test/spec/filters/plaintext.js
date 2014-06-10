'use strict';

describe('Filter: plainText', function () {

  // load the filter's module
  beforeEach(module('websiteApp'));

  // initialize a new instance of the filter before each test
  var plainText;
  beforeEach(inject(function ($filter) {
    plainText = $filter('plainText');
  }));

  it('should return the input prefixed with "plainText filter:"', function () {
    var text = 'angularjs';
    expect(plainText(text)).toBe('plainText filter: ' + text);
  });

});
