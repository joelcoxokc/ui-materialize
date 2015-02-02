;(function() { 'use strict';

    angular
        .module('core')
        .controller('GridController', GridController)
        ;

    /* @ngInject */
    function GridController($scope) {

        $scope.showContainer = true;
        $scope.showOffsets = false;

        ///////////////////
        $scope.toggleContainer = function () { $scope.showContainer = !$scope.showContainer; };
        $scope.toggleOffsets   = function () { $scope.showOffsets   = !$scope.showOffsets  ; };

      }

  }).call(this);
