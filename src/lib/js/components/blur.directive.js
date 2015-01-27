;function() { 'use strict';
    angular
        .module('mz.components.blur', [])
        .directive('mzBlur', mzBlur);

    /* @inject */
    function mzBlur() {
        return {
            // templateUrl: 'templates/mzBlur.view.html',
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
