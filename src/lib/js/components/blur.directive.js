;(function() { 'use strict';
    angular
        .module('mz.components.blur', [])
        .directive('mzBlur', mzBlur)
        ;

    /* @inject */
    function mzBlur() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzBlur.view.html',
      }

  }).call(this);
