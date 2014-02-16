'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('testYeomanApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should have 1 menu', function () {
    expect(scope.menus.length).toBe(1);
  });
});
