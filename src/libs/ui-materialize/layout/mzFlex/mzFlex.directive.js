;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzFlex', mzFlex)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }


    /* @inject */
    function mzFlex(Scopify) {
        return {
            template: '<div class="mz-flex" data-ng-transclude></div>',
            restrict: 'E',
            scope: {},
            replace:true,
            transclude: true,
            controller: 'mzNavController as vm',
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            var $body;


            ///////////////////////////////


        }

    }

}).call(this);
