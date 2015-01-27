;function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge);
        // .directive('navSideContainer', navSideContainer)


    /* @inject */
    function mzNavLeft($animate) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate) {
        return new SideNavigation('right')
    }


    function SideNavigation(side) {

        this.scope = true;
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^mzMaterialize';
        this.templateUrl = 'nav/nav-side.template.html';

        ////////////////////
        ///
        ///
        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};
            element.addClass('mz-side-nav')
            ctrl.addNav(side, element, attrs, config, scope);

            scope.settings = {};
            scope.settings.side = side;
        };
    }
    function mzNavSideHeading() {
        return {
            scope:      true,
            restrict:   'EA',
            transclude: true,
            link:       link
        };
        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-side-heading');

            transclude(scope, function (clone) {
                element.append(clone)
            });
        }
    }
    function mzNavSideContent() {
        return {
            // template: '<div class="nav-side-content-wrap" data-ng-transclude></div>',
            scope:      true,
            restrict:   'EA',
            transclude: true,
            link:       link
        };
        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-side-content');

            transclude(scope, function (clone) {
                element.append(clone)
            });
        }
    }

    function headerActionHuge() {
        return {
            restrict: 'A',
            require: '^mzMaterialize',
            // scope: true,
            link: link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl) {
            element.addClass('header-action-huge');
            ctrl.registerAction('right', 'useLargeAction');
            // .useLargeAction();
        }
    }




}).call(this);
