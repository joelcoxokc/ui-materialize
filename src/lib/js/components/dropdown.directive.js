;(function() { 'use strict';
    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown);

    /* @inject */
    function mzDropdown() {
        return {
            // templateUrl: 'templates/mzDropdown.view.html',
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
