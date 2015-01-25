;(function() {

    'use strict';

    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter);

    /* @inject */
    function mzFooter() {
        return {
            template: '<footer data-ng-class="color" data-ng-transclude></footer>',
            restrict: 'E',
            scope: {
                color: '@'
            },
            transclude: true,
            replace:true,
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
