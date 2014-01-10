'use strict';

describe('Service: Pub', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var Pub;
  beforeEach(inject(function (_Pub_) {
    Pub = _Pub_;
  }));

  it('should do something', function () {
    expect(!!Pub).toBe(true);
  });

});
