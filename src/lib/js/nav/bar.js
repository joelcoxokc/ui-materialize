;(function() { 'use strict';
    angular
        .module('mz.nav.bar', [])
        .directive('mzNavBar', mzNavBar)
        ;

    /* @inject */
    function mzNavBar($rootScope, $document) {
        return  { templateUrl : 'nav/bar.html'
                , restrict    : 'E'
                , require     : '^mzMaterialize'
                , scope       : { view:'@' , bg:'@' , side:'@' , fixed:'@' , brand:'@' , size: '@' }
                , replace     : true
                , transclude  : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            attrs.fixed &&( element.addClass('bar-fixed') );
            attrs.size  &&( element.addClass('bar-'+attrs.size) );
            ctrl.addBar(scope, element, attrs);
            jQuery(document).ready(function() {
                if (scope.brand) {
                    $(element).find('.bar-content')
                              .before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>'); }
              });
          }
      }

  }).call(this);
