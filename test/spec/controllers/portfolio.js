'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('aVotreImage'));

  var PortfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

});
