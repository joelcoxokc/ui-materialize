;(function() {

    'use strict';

    angular
        .module('mz.components.media', [])
        .directive('mzMedia', mzMedia);

    /* @inject */
    function mzMedia() {
        return {
            // templateUrl: 'templates/mzMedia.view.html',
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
