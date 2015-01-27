;(function() { 'use strict';

    angular
        .module('mz.components.button', [])
        .directive('mzButton', mzButton)
        ;

    /* @inject */

    function mzButton() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) { }
               }; // templateUrl: 'templates/mzButton.view.html',
        }

    }).call(this);
