;(function() { 'use strict';
    angular
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer);

    /* @inject */
    function mzContainer() {
        return {
            restrict: 'AC',
            require: '^mzMaterialize',
            scope: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            Scopify('mzContainer', scope, ctrl)


            // scope.___CONTROLLER = '@inherits === [ mzFlex ]';
            // scope.____CTRL = ctrl;
            element.addClass('container');
            element.addClass('mz-container');
            // ctrl.addContainer()

        }
    }

}).call(this);
