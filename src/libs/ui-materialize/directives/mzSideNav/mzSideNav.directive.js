;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzSideNav', mzSideNav)
        .directive('mzSideNavToggle', mzSideNavToggle)

    /* @inject */
    function mzSideNav($animate) {
        return {
            templateUrl: 'templates/directives/mzSideNav/mzSideNav.template.html',
            restrict: 'E',
            require:'^mzFlex',
            scope: {},
            transclude: true,
            link: link
        };

        ////////////////////////////////


        function link(scope, element, attrs, ctrl) {
            // console.log(controllers);
            element.addClass('mz-side-nav');
            element.addClass('animate');
            element.addClass('side-'+attrs.side)

            attrs.side && element.addClass('nav-' + attrs.side);

            scope.$element = element;
            scope.$attrs   = attrs;

            ctrl
                .add(scope, attrs.side)
                .then(function() {});

            scope.$on('$navOpened', function (event, value) {
                $animate[value ? 'addClass' : 'removeClass'](element, 'nav-attrs.name-open');
            });
            scope.$on('$navClosed', function (event, value) {
                $animate[value ? 'addClass' : 'removeClass'](element, scope.classNames.close);
            });
            scope.$on('$navFolded', function (event, value) {
                $animate[value ? 'addClass' : 'removeClass'](element, scope.classNames.fold);
            });

            console.log(scope);
            // scope.$isLeftOpen = true;
            // scope.$isLeftClosed = true;
            ///////////////////////////////

        }

    }

    /* @ngInject */
    function mzSideNavToggle() {
        return {
            restrict: 'A',
            require: '^mzFlex',
            scope: {
                toggle: '@',
            },
            link:function(scope, element, attrs, ctrl) {
                var side, toggle, toggleLeft, toggleRight, nav;

                side   = attrs.mzSideNavToggle;

                $(element).addClass('mz-side-nav-toggle-'+side);
                $(element).addClass('mz-side-nav-toggle');
                nav = ctrl.navs[side];

                element.bind('click', function() {

                    if (scope[attrs.toggle]) {
                        scope[attrs.toggle]();
                    }
                });

                scope.open = function () {
                    console.log('test');
                    nav.$isLeftOpen = !nav.$isLeftOpen;
                }

            }

        }
    }

}).call(this);
