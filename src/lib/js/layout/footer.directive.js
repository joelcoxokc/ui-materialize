;(function() { 'use strict';

    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter)
        ;

    /* @inject */
    function mzFooter() {

        return { templateUrl: 'layout/footer.template.html'
               , restrict   : 'E'
               , scope      : { color:'@' }
               , transclude : true
               , replace    : true
               , link       : function link(scope, element, attrs) {}
               };
      }

  }).call(this);
