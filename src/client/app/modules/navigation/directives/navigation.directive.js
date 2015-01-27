;function() { 'use strict';
    angular
        .module('navigation')
        .directive('navigation', navigation);

    /* @ngInject */
    function navigation() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'navigationController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);