;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        ;

    /* @inject */
    function mzNavLeft($animate)  { return new SideNavigation('left'); }
    /* @inject */
    function mzNavRight($animate) { return new SideNavigation('right'); }

    function SideNavigation(side) {
        this.scope       = true;
        this.replace     = true;
        this.restrict    = 'E';
        this.require     = '^mzMaterialize';
        this.templateUrl = 'nav/side.html';

        this.link = function(scope, element, attrs, ctrl, transclude) {
            scope.view = attrs.view;
            scope.settings = {side:side};
            element.addClass('nav-'+side);
            attrs.fixed && element.addClass('nav-fixed');
            ctrl.addNav(scope, element, attrs, side);
          };
      }

  }).call(this);
