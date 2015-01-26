;(function() {

    'use strict';

    angular
        .module('mz.components.select', [])
        .directive('mzSelect', mzSelect);

    /* @inject */
    function mzSelect() {
        return {
            // templateUrl: 'templates/mzSelect.view.html',
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
