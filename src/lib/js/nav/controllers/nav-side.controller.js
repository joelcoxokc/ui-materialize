;(function() { 'use strict';
    angular
        .module('mz.nav.controllers.nav.side', [])
        .controller('navSideCtrl', navSideCtrl)
        ;

    function navSideCtrl ($scope, $RightNavigationService, $LeftNavigationService) {
        var sides =
              { right : $RightNavigationService
              , left  : $LeftNavigationService
              };

        this.init = function(scope, element, attrs, side) {
            this[side] = new sides[side](scope, element, attrs);
          };
      };

}).call(this);
