;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzTab', mzTab);

    /* @inject */
    function mzTab() {
        return {
            template: '<li class="tab" ><a href="{{link}}" class="pink-text text-accent-1">{{name}}</a></li>',
            restrict: 'E',
            scope: {
                link:'@',
                name:'@'
            },
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
