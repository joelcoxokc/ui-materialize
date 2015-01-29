;(function() { 'use strict';

    angular
        .module('mz.nav.side.toggle', [])
        .directive('mzToggleRightNav', mzToggleRightNav)
        .directive('mzToggleLeftNav', mzToggleLeftNav)
        ;


     /* @inject */
    function mzToggleRightNav() { return new ToggleNav('right', 'mzNavRight'); }

     /* @inject */
    function mzToggleLeftNav() { return new ToggleNav('left', 'mzNavLeft'); }

    function ToggleNav(side, parent) {
        this.restrict = 'A';
        this.require  = '^mzMaterialize';
        this.scope    = true
        this.link     = function link(scope, element, attrs, ctrl) {
            var icon = angular.element('<i>').addClass(' first-icon '+attrs.icon);
            var nextIcon = angular.element('<i>').addClass(' next-icon '+attrs.nextIcon);
            element.addClass('nav-side-toggle')
            element.append(icon);
            element.append(nextIcon);
            element.bind('click', cycle);
            scope.$on('$destroy', function(){ element.unbind('click', cycle); });
            function cycle(){
                ctrl.$navs[side].cycle();
                element.toggleClass('next');
              }
          }
      }

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