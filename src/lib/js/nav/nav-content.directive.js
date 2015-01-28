;(function() { 'use strict';

    angular
        .module('mz.nav.content', [])
        .directive('navContent', navContent)
        ;

    /* @ngInject */

    function navContent() {

        return { restrict  : 'E'
               , require   : '^mzMaterialize'
               , scope     : {brand:'@'}
               , transclude: true
               , link      :link
               };

        /////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-content');

            transclude(scope, function (clone){ element.append(clone)});

            jQuery(document).ready(function(){
                if (scope.brand) {
                  $(element).before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>'); }
              });
          }
      } // end function mzNavBrand
  }).call(this);