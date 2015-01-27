;(function() { 'use strict';

    angular
        .module('mz.nav.bar', [])
        .directive('mzNav', mzNav)
        ;

    /* @inject */
    function mzNav($rootScope, $document) {

        return { templateUrl: 'nav/nav-bar.template.html'
               , restrict: 'E'
               , require:'^mzMaterialize'
               , scope: { view:'@' , color:'@' , side:'@' , fixed:'@' , brand:'@' , size: '@' }
               , link: link
               };

        /////////////

        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = 'top' || attrs.side;
            scope.side = side
            attrs.fixed && (config.fixed = true); // FIXME: ?? config.fixed = !!attrs.fixed
            attrs.size  && (config[attrs.size] = true);
            ctrl.addNav(side, element, attrs, config, scope);

            //////////

            jQuery(document).ready(function(){
                if (scope.brand) {
                  $(element).find('.mz-nav-content')
                            .before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>'); }
              });
            // transclude(scope, function(clone){ .append(clone); });
          }
      }
  }).call(this);