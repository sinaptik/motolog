'use strict';

describe('Controller: VehicleCtrl', function () {

  // load the controller's module
  beforeEach(module('motologApp'));

  var VehicleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VehicleCtrl = $controller('VehicleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
