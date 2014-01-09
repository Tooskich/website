'use strict';

describe('Filter: findImage', function () {

  // load the filter's module
  beforeEach(module('websiteApp'));

  // initialize a new instance of the filter before each test
  var findImage;
  beforeEach(inject(function ($filter) {
    findImage = $filter('findImage');
  }));

  it('should return the input prefixed with "findImage filter:"', function () {
    var text = 'angularjs';
    expect(findImage(text)).toBe('findImage filter: ' + text);
  });

});
