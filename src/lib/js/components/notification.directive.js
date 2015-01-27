;function() { 'use strict';
    angular
        .module('mz.components.notification', [])
        .directive('mzNotification', mzNotification);

    /* @inject */
    function mzNotification() {
        return {
            // templateUrl: 'templates/mzNotification.view.html',
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
