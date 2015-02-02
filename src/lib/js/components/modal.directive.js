;(function() { 'use strict';

    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal)
        ;

    /* @inject */
    function mzModal() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzModal.view.html',
      }

  }).call(this);
