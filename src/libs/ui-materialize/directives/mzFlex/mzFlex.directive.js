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
    function mzFlex() {
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

            scope.$element = element;
            scope.$attrs = attrs;
            scope.$hasAsideLeft  = false;
            scope.$hasAsideRight = false;
            scope.$isLeftOpen    = false;
            scope.$isRightOpen   = false;
            scope.$isLeftFolded  = false;
            scope.$isRightFolded = false;
            ctrl.init(scope);

            $('body').addClass('has-flex');
            $('html').addClass('has-flex');

            $body = $(element).children('.mz-body');

            scope.$on('$hasContainer', function () {
                element.addClass('has-mz-container');
            });

            ///////////////////////////////


        }

    }

}).call(this);
