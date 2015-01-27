;function() { 'use strict';
    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard);

    /* @inject */
    function mzCard() {
        return {
            // templateUrl: 'templates/mzCard.view.html',
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
