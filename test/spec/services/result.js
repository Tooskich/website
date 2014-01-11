'use strict';

describe('Service: Result', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var Result;
  beforeEach(inject(function (_Result_) {
    Result = _Result_;
  }));

  it('should do something', function () {
    expect(!!Result).toBe(true);
  });

});
