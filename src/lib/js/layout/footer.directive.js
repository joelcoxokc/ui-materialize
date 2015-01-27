;(function() { 'use strict';

    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter)
        ;

    /* @inject */
    function mzFooter() {

        return { templateUrl: 'layout/footer.template.html'
               , restrict   : 'E'
               , scope      : { color:'@', view:'@'}
               , transclude : true
               , link       : link
               };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-footer');

        }

      }
  }).call(this);