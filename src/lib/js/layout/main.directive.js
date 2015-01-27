;(function() { 'use strict';

    angular
        .module('mz.layout.main', [])
        .directive('mzMain', mzMain)
        ;

    /* @inject */
    function mzMain() {

        return { templateUrl : 'layout/main.template.html'
               , restrict    : 'E'
               , transclude  : true
               , scope       : { color:'@', view:'@'}
               , link        : link
               };

        ////////////////

        function link(scope, element, attrs) {
          element.addClass('mz-main');
        }

      }
  }).call(this);