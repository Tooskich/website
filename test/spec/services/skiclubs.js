'use strict';

describe('Service: Skiclubs', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var Skiclubs;
  beforeEach(inject(function (_Skiclubs_) {
    Skiclubs = _Skiclubs_;
  }));

  it('should do something', function () {
    expect(!!Skiclubs).toBe(true);
  });

});
