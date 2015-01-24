;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge)
        // .directive('navSideContainer', navSideContainer)


    /* @inject */
    function mzNavLeft($animate, Scopify) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate, Scopify) {
        return new SideNavigation('right')
    }

     /*
        mzNav{Side} right | Left
    ====================
        @directive     |    mz-nav-{side}
        @decription    |    Controlls the side bar navigations
        @usage         |
                       |    <mz-nav-{left || right}
                                 color= <background-color>
                                 size=  <small | medium | large>
                                 fixed= <boolean>
                                 view= <ui-view-name>
                             ></mz-nav-{left || right}>

    ====================*/
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
            element.addClass('mz-side-nav')
            ctrl.addNav(side, element, attrs, config, scope);
            // console.log('NAV-'+side.toUpperCase(), scope);

            scope.settings = {};
            scope.settings.side = side;
        };
    }

    /*
       mzNavSideHeading
    ====================
        @directive     |    mz-nav-side-heading
        @decription    |    Controlls the heading portion of the side bar directives
        @usage         |
                       |    <mz-nav-side-heading>
                             ></mz-nav-side-heading>

    ====================*/
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

    /*
       mzNavSideContent
    ====================
        @directive     |    mz-nav-side-content
        @decription    |    Controlls the content portion of the side bar directives
        @usage         |
                       |    <mz-nav-side-content>
                             ></mz-nav-side-content>

    ====================*/
    function mzNavSideContent() {
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
