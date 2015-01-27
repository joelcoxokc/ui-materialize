;function() { 'use strict';
    angular
        .module('mz.components.dialog', [])
        .directive('mzDialog', mzDialog);

    /* @inject */
    function mzDialog() {
        return {
            // templateUrl: 'templates/mzDialog.view.html',
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
