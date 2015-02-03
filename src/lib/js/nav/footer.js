;(function() { 'use strict';
    angular
        .module('mz.nav.footer', [])
        .directive('mzNavFooter', mzNavFooter)
        ;

    /* @inject */
    function mzNavFooter($rootScope, $document) {
        return { restrict  : 'E'
               , require   : '^mzMaterialize'          // FIXME: is this a regex?
               , scope     : { color:'@' , side:'@' , fixed:'@' , brand:'@' , view:'@' , size:'@' }
               , transclude: true
               , link      : link
               };
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = attrs.side || 'top';
            scope.side = side;
            config.fixed = !!attrs.fixed;
            config[attrs.size] = !!attrs.size;
            ctrl.addNav(side, element, attrs, config, scope);
            transclude(scope, function (clone) { element.find('nav').append(clone); });
            transclude(scope, element.find('nav').append); // FIXME: Is this right, or the line above?
          }
      } // end function mzNavFooter

  }).call(this);
