'use strict';

describe('Controller: TarifCtrl', function () {

  // load the controller's module
  beforeEach(module('aVotreImage'));

  var TarifCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TarifCtrl = $controller('TarifCtrl', {
      $scope: scope
    });
  }));

});
