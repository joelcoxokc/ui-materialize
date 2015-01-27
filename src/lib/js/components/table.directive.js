;(function() { 'use strict';
    angular
        .module('mz.components.table', [])
        .directive('mzTable', mzTable);

    /* @inject */
    function mzTable() {
        return {
            // templateUrl: 'templates/mzTable.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);
