;(function() { 'use strict';
    angular
        .module('mz.components.shadow', [])
        .directive('mzShadow', mzShadow)
        ;

    /* @inject */
    function mzShadow() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzShadow.view.html',
      }

  }).call(this);
