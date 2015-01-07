;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzContainer', mzContainer);

    /* @inject */
    function mzContainer() {
        return {
            restrict: 'AC',
            require: '^mzFlex',
            scope: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            element.addClass('container');
            element.addClass('mz-container');
            ctrl.addContainer()

        }
    }

}).call(this);
