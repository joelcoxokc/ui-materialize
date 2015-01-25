;(function() {

    'use strict';

    angular
        .module('mz.components.progress', [])
        .directive('mzProgress', mzProgress);

    /* @inject */
    function mzProgress() {
        return {
            // templateUrl: 'templates/mzProgress.view.html',
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
