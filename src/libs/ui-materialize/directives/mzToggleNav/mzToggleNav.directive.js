;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzToggleNav', mzToggleNav);

    /* @inject */
    function mzToggleNav() {
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
