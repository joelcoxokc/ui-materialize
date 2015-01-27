;(function() { 'use strict';
    angular
        .module('mz.components.ripple', [])
        .directive('mzRipple', mzRipple);

    /* @inject */
    function mzRipple() {
        return {
            // templateUrl: 'templates/mzRipple.view.html',
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
