;(function() { 'use strict';
    angular
        .module('mz.components.button', [])
        .directive('mzBtn', mzBtn)
        ;

    /* @inject */
    function mzBtn() {
        return  { template   : '<a class="btn mz-btn"><i data-ng-if="icon" data-ng-class="icon"></i></a>'
                , restrict   : 'E'
                , replace    : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                , transclude : true
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.type &&( element.addClass('btn-'+scope.type) )
            scope.size &&( element.addClass('btn-'+scope.size) )

            transclude(scope, function (clone) {element.append(clone); });

          }
      }

  }).call(this);
