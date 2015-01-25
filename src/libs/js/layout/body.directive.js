;(function() {

    'use strict';

    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody);

    /* @inject */
    function mzBody(Scopify) {
        return {
            restrict: 'E',
            require: '^mzMaterialize',
            scope: true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {

            // scope.$parent.$parent = mzMaterialize $scope
            // scope.$parent.$parent.mz = ctrl

            ctrl.body = element;

            element.addClass('mz-body');
            // console.log('BODY',  scope);
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
