;(function() { 'use strict';

    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard)
        ;

    /* @inject */
    function mzCard() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzCard.view.html',
      }

  }).call(this);
