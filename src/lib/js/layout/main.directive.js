;(function() { 'use strict';

    angular
        .module('mz.layout.main', [])
        .directive('mzMain', mzMain)
        ;

    /* @inject */
    function mzMain() {
        return { template  : '<main class="mz-main" data-ng-transclude></main>'
               , restrict  : 'E'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      : function link(scope, element, attrs) {}
               };
      }

  }).call(this);
