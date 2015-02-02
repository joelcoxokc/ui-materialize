;(function() { 'use strict';

    angular
        .module('mz.components.ripple', [])
        .directive('mzRipple', mzRipple)
        ;

    /* @inject */
    function mzRipple() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzRipple.view.html',
      }

  }).call(this);
