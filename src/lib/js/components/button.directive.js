<<<<<<< HEAD
;function() { 'use strict';
=======
;(function() { 'use strict';

>>>>>>> 23822a501be114f13e5405a8d0de5cc4e6054888
    angular
        .module('mz.components.button', [])
        .directive('mzBtn', mzBtn);

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
