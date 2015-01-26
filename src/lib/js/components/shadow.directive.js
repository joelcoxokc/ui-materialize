;(function() {

    'use strict';

    angular
        .module('mz.components.shadow', [])
        .directive('mzShadow', mzShadow);

    /* @inject */
    function mzShadow() {
        return {
            // templateUrl: 'templates/mzShadow.view.html',
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
