;(function() {

    'use strict';

    angular
        .module('stylus')
        .directive('stylus', stylus);

    /* @ngInject */
    function stylus() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'stylusController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);