;(function() { 'use strict';
    angular
        .module('mz.nav.container', [])
        // .directive('navContainer', navContainer)
        ;

    function navContainer() {
        return  { restrict: 'E'
                , scope   : {side:'@'}
                , link    : link
                };
        function link(scope, element, attrs) {
            element.addClass('mz-nav-conatainer');
            // element.addClass('nav-container-'+attrs.mzNavContainer);
          }
      }

  }).call(this);
