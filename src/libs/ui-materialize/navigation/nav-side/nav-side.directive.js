;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)


    /* @inject */
    function mzNavLeft($animate, Scopify) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate, Scopify) {
        return new SideNavigation('right')
    }

    function SideNavigation(side) {

        this.scope = true;
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^mzMaterialize';
        this.templateUrl = 'templates/navigation/nav-side/nav-side.template.html';

        ////////////////////
        ///
        ///
        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};
            ctrl.addNav(side, element, attrs, config, scope);
            console.log('NAV-'+side.toUpperCase(), scope);
        };
    }




}).call(this);
