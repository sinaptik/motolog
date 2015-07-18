'use strict';

describe('Controller: MaintainenceCtrl', function () {

  // load the controller's module
  beforeEach(module('motologApp'));

  var MaintainenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaintainenceCtrl = $controller('MaintainenceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
