;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzBody', mzBody);

    /* @inject */
    function mzBody() {
        return {
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-body')
            ///////////////////////////////

            transclude(scope, function (clone) {
                element.append(clone);
            });

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
