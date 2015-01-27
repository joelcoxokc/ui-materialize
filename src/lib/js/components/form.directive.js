;(function() { 'use strict';
    angular
        .module('mz.components.form', [])
        .directive('mzForm', mzForm);

    /* @inject */
    function mzForm() {
        return {
            // templateUrl: 'templates/mzForm.view.html',
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
