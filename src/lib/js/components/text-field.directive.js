;(function() {

    'use strict';

    angular
        .module('mz.components.text-field', [])
        .directive('mzTextField', mzTextField);

    /* @inject */
    function mzTextField() {
        return {
            // templateUrl: 'templates/mzTextField.view.html',
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
