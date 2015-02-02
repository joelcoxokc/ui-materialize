;(function() { 'use strict';

    angular
        .module('mz.components.select', [])
        .directive('mzSelect', mzSelect)
        ;

    /* @inject */
    function mzSelect() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzSelect.view.html',
      }

  }).call(this);
