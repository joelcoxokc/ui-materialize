;(function() { 'use strict';

    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody)
        ;

    /* @inject */
    function mzBody() {
        return  { restrict:'E'
                , require:'^mzMaterialize'
                , scope:true
                , transclude:true
                , link:link
                };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            ctrl.body = element;
            element.addClass('mz-body');
            transclude(scope, function (clone) { element.append(clone); });
          }

      }

  }).call(this);
