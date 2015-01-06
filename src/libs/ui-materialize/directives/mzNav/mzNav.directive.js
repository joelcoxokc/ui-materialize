;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzNav', mzNav)
        .controller('mzNavController', mzNavController);


    /* @inject */
    function mzNav($rootScope, $document) {
        return {
            template: '<nav data-ng-transclude></nav>',
            restrict: 'E',
            scope: {
                color: '@'
            },
            transclude: true,
            replace: true,
            controller:'mzNavController as mz',
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {


            //////////////////////////
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

    /* @ngInject */
    function mzNavController($rootScope) {
        var _this, mvNavDefaults;


    }

}).call(this);
