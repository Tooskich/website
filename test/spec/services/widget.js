'use strict';

describe('Service: Widget', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var Widget;
  beforeEach(inject(function (_Widget_) {
    Widget = _Widget_;
  }));

  it('should do something', function () {
    expect(!!Widget).toBe(true);
  });

});
