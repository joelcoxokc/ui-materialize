;function() { 'use strict';
    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal);

    /* @inject */
    function mzModal() {
        return {
            // templateUrl: 'templates/mzModal.view.html',
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
