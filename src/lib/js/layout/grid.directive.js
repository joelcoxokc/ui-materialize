;(function() { 'use strict';

    angular
        .module('mz.layout.grid', [])
        .directive('mzCol', mzCol)
        ;

    /* @inject */
    function mzCol() {
        return { template: '<div class="col" data-ng-class="ngClasses" data-ng-transclude></div>'
               , restrict: 'EA'
               , scope:{ s:'@' , m:'@' , l:'@' , offset:'@' }
               , transclude: true
               , replace:true
               , link: link
               };

        ////////////////

        function link(scope, element, attrs) {
            scope.ngClasses = {};
            attrs.s &&( scope.ngClasses['s'+attrs.s] = !!attrs.s );
            attrs.m &&( scope.ngClasses['m'+scope.m] = !!scope.m );
            attrs.l &&( scope.ngClasses['l'+scope.m] = !!scope.l );
            attrs.offset &&( scope.ngClasses['offset-'+scope.offset] = !!scope.offset );
          }

      }

  }).call(this);
