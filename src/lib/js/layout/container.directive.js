;(function() { 'use strict';

    angular
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer)
        ;

    /* @inject */
    function mzContainer() {

        return  { restrict: 'AC'
                , require: '^mzMaterialize'
                , scope:true
                , link:link
                };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            element.addClass('container');
            element.addClass('mz-container');
          }
      }
  }).call(this);