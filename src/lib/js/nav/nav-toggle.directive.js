;(function() { 'use strict';

    angular
        .module('mz.nav.toggle', [])
        .directive('mzSideNavToggle', mzSideNavToggle)
        ;


    /* @ngInject */
    function mzSideNavToggle() {

        return { restrict: 'A'
               , require : '^mzMaterialize'
               , scope   : { toggle:'@' , icon:'@' , nextIcon:'@' }
               , link    : link
               }

        function link(scope, element, attrs, ctrl) {
                 var icon = angular.element('<i>').addClass(' first-icon '+scope.icon); // FIXME: leading space?
                 var nextIcon = angular.element('<i>').addClass(' next-icon '+scope.nextIcon);
                 var side, toggle, toggleLeft, toggleRight, nav;

                 element.addClass('nav-side-toggle');
                 scope.toggleOn = false;
                 element.append(icon);
                 element.append(nextIcon);

                 element.on('click', function(){
                   scope.toggleOn = !scope.toggleOn;
                   // toggleNext(scope.toggleOn); // FIXME: never uses arg
                   element.toggleClass('next');
                   // console.log(scope.nextIcon);
                   ctrl.$navs.right.scope.isOpen = !ctrl.$navs.right.scope.isOpen;
                   ctrl.$navs.right.scope.$apply();
                   console.log(ctrl.$navs.right.scope.isOpen);  });  }

      } // end function mzSideNavToggle
  }).call(this);