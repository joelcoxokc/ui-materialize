;(function() { 'use strict';
    angular
        .module('mz.components.tooltip', [])
        .directive('mzTooltip', mzTooltip);

    /* @inject */
    function mzTooltip() {
        return {
            // templateUrl: 'templates/mzTooltip.view.html',
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
