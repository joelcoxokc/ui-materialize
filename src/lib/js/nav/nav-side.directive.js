;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzToggleRightNav', mzToggleRightNav)
        .controller('sideNavCtrl', Controller)
        ;


    /* @inject */
    function mzNavLeft($animate) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate) {
        return new SideNavigation('right')
    }

    function Controller ($scope) {
        var vizList, vizIndex;

        this.init = function(element, attrs) {
            this.element = element;
            vizList = (  attrs.viz || 'fat'  ).split(/([,\s]+)/);
            vizList = (  attrs.viz || 'fat'  ).split(' ');
            console.log(vizList);
            vizIndex = 0;
            this.useViz(vizList[vizIndex]);
          };

        this.cycle = function() {
            vizIndex = Math.floor((vizIndex+1) % vizList.length);
            this.useViz( vizList[vizIndex] );
          };

        this.useViz = function(viz) {
            this.viz && this.element.removeClass('nav-viz-'+this.viz);
            this.element.addClass('nav-viz-'+(  this.viz = viz  ));
          };

      };

    function SideNavigation(side) {

        this.scope = true;
        this.restrict = 'E';
        this.templateUrl = 'nav/nav-side.template.html';
        this.controller  = 'sideNavCtrl as vm';

        this.link = function(scope, element, attrs, ctrl, transclude) {
            scope.view = attrs.view;
            scope.settings = {side:side};

            element.addClass('mz-side-nav nav-'+side);

            ctrl.init(element, attrs);

          };
      }

     /* @inject */
    function mzToggleRightNav() {

         return { restrict: 'A'
                , require : '^mzNavRight'
                , scope   : true
                , link    : link
                };
        function link(scope, element, attrs, ctrl) {
            element.bind('click', cycle);
            scope.$on('$destroy', function(){ element.unbind('click', cycle); });
            function cycle(){ ctrl.cycle() }
          }
      }

}).call(this);