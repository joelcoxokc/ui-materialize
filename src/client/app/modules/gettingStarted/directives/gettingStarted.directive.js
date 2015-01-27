;function() { 'use strict';
    angular
        .module('gettingStarted')
        .directive('gettingStarted', gettingStarted);

    /* @ngInject */
    function gettingStarted() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'gettingStartedController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);