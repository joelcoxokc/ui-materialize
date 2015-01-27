;(function() { 'use strict';

    angular
        .module('mz.layout.flex', [])
        .directive('mzFlex', mzFlex)
        ;

    /* @inject */
    function mzFlex() {
        return  { template   : '<div class="mz-flex" data-ng-transclude></div>'
                , restrict   : 'E'
                , scope      : {}
                , replace    : true
                , transclude : true
                , controller : 'mzNavController as vm'
                , link       : link
                };

        function link(scope, element, attrs, ctrl) {}

      }

  }).call(this);
