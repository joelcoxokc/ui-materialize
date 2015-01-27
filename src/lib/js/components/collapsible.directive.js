;function() { 'use strict';
    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible);

    /* @inject */
    function mzCollapsible() {
        return {
            templateUrl: 'templates/mzCollapsible.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
