;(function() { 'use strict';
    angular
        .module('mz.nav.content', [])
        .directive('barContent', barContent)
        ;

    /* @ngInject */

    function barContent() {

        return { templateUrl : 'nav/bar-content.html'
               , restrict    : 'E'
               , require     : '^mzMaterialize'
               , scope       : {brand:'@'}
               , replace     : true
               , transclude  : true
               , link        : link
               };
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('bar-content');
            transclude(scope, function (clone){ element.append(clone)});
            jQuery(document).ready(function(){
                (scope.brand) &&( $(element).before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>') )
              });
          }
      } // end function mzNavBrand

  }).call(this);
