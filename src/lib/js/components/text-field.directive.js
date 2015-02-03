;(function() { 'use strict';
    angular
        .module('mz.components.text-field', [])
        .directive('mzTextField', mzTextField)
        ;

    /* @inject */
    function mzTextField() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzTextField.view.html',
      }

  }).call(this);
