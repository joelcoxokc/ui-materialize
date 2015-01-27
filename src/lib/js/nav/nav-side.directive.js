;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .controller('sideNavCtrl', Controller)


    /* @inject */
    function mzNavLeft($animate) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate) {
        return new SideNavigation('right')
    }

    function Controller ($scope, $RightNavigationService) {
        $scope.initial = {};

        $scope.init = function(element, attrs) {
            // this.

        }
      }

    function SideNavigation(side) {

        this.scope = true;
        this.restrict = 'E';
        this.require = '^mzMaterialize';
        this.templateUrl = 'nav/nav-side.template.html';

        ///////////////////

        this.controller  = 'sideNavCtrl as vm';

        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};

            scope.init = init;
            scope.view = attrs.view;
            scope.settings = {};
            scope.settings.side = side;

            scope.init();
            // ctrl.addNav(side, element, attrs, config, scope);

            function init() {

                element.addClass('mz-side-nav');
                element.addClass('nav-'+attrs.side);
                attrs.fold   && element.addClass('nav-'+attrs.side+'-fold');
                attrs.open   && element.addClass('nav-'+attrs.side+'-open');
                attrs.front  && element.addClass('nav-'+attrs.side+'-front');
                attrs.fixed  && element.addClass('nav-'+attrs.side+'-fixed');
                attrs.onOpen && element.addClass('init-'+attrs.onOpen )
            }

            function close() {
                element.removeClass('nav-'+attrs.side+'-open')
                element.addClass('nav-'+attrs.side+'-'+attrs.onClose)
            }

            function open() {
                element.removeClass('nav-'+attrs.side+'-'+attrs.onClose)
                element.addClass('nav-'+attrs.side+'-'+attrs.onOpen)
            }

            function fold() {
                element.addClass('nav-'+attrs.side+'-fold')
                element.removeClass('nav-'+attrs.side+'-open')
            }
        };
    }

}).call(this);