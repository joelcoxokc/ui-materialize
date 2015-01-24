;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzMaterialize', mzMaterialize)
        .run(mzRunner)

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }

    /* @inject */
    function mzMaterialize(Scopify) {
        return {
            template: '<div class="mz-materialize" ng-class="classList" data-ng-transclude></div>',
            restrict: 'E',
            replace:true,
            transclude:true,
            scope: true,
            controller: 'mzController as mz',
                link: link
            };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-materialize');
            $('body').addClass('has-flex');
            $('html').addClass('has-flex');
            scope.classList = {};
            ctrl.init(element);
            ///////////////////////////////
        }
    }

}).call(this);