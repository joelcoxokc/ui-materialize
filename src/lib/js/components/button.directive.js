;(function() {

    'use strict';

    angular
        .module('mz.components.button', [])
        .directive('mzButton', mzButton);

    /* @inject */
    function mzButton() {
        return {
            // templateUrl: 'templates/mzButton.view.html',
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
