;(function() { 'use strict';

    angular
        .module('mz.layout.include', [])
        .directive('mzInclude', mzInclude)
        ;

    /* @inject */
    function mzInclude() {
        return { restrict : 'E'
               , link     : link
               };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (cone) { element.append(cone); });
          }

      }

  }).call(this);
