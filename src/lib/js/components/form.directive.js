;(function() { 'use strict';
    angular
        .module('mz.components.form', [])
        .directive('mzForm', mzForm)
        ;

    /* @inject */
    function mzForm() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzForm.view.html',
      }

  }).call(this);
