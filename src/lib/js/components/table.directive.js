;(function() { 'use strict';

    angular
        .module('mz.components.table', [])
        .directive('mzTable', mzTable)
        ;

    /* @inject */
    function mzTable() {
        return { restrict   : 'E'
               , scope      : true
               , transclude : true
               , link       : function link(scope, element, attrs) {}
               }; // templateUrl: 'templates/mzTable.view.html',
        }

    }).call(this);
