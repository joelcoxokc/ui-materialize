;(function() { 'use strict';
    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown)
        ;

    /* @inject */
    function mzDropdown() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzDropdown.view.html',
      }

  }).call(this);
