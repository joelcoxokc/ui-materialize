;(function() { 'use strict';

    angular
        .module('mz.components.dialog', [])
        .directive('mzDialog', mzDialog)
        ;

    /* @inject */
    function mzDialog() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
                 // templateUrl: 'templates/mzDialog.view.html',
               };
        }

    }).call(this);
