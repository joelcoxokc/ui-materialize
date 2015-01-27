;(function() { 'use strict';

    angular
        .module('mz.components.tooltip', [])
        .directive('mzTooltip', mzTooltip)
        ;

    /* @inject */
    function mzTooltip() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzTooltip.view.html',

      }

  }).call(this);
