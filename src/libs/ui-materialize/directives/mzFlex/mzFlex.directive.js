;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzFlex', mzFlex);

    /* @inject */
    function mzFlex() {
        return {
            template: '<div class="mz-flex" data-ng-transclude></div>',
            restrict: 'E',
            scope: true,
            replace:true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            $('body').addClass('has-flex')
            $('html').addClass('has-flex')

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
