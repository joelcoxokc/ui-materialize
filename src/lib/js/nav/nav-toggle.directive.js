;(function() {

    'use strict';

    angular
        .module('mz.nav.toggle', [])
        .directive('mzToggleNav', mzToggleNav)
        .directive('mzSideNavToggle', mzSideNavToggle);

    /* @inject */
    function mzToggleNav() {
         return {
            restrict: 'A',
            require: '^mzMaterialize',
            scope: {
                toggle: '@',
            },
            link:function(scope, element, attrs, ctrl) {


            }

        }
    }

     /* @ngInject */
    function mzSideNavToggle() {
        return {
            restrict: 'A',
            require: '^mzMaterialize',
            scope: {
                toggle: '@',
                icon: '@',
                nextIcon: '@',
            },
            /////////////
            ///
            ///
            link: function(scope, element, attrs, ctrl) {
                var side, toggle, toggleLeft, toggleRight, nav, icon, nextIcon;
                element.addClass('nav-side-toggle')
                scope.toggleOn = false;

                icon = angular.element('<i>').addClass(' first-icon '+scope.icon)
                nextIcon = angular.element('<i>').addClass(' next-icon '+scope.nextIcon)

                element.append(icon);
                element.append(nextIcon);


                element.on('click', function(){
                    scope.toggleOn = !scope.toggleOn;
                    toggleNext(scope.toggleOn);
                    // console.log(scope.nextIcon);
                    ctrl.$navs.right.scope.isOpen = !ctrl.$navs.right.scope.isOpen;
                    ctrl.$navs.right.scope.$apply()
                    console.log(ctrl.$navs.right.scope.isOpen);
                });



                function toggleNext() {
                    element.toggleClass('next')

                }

            }
        }
    }

}).call(this);
