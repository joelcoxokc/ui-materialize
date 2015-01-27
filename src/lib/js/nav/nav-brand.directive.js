;(function() { 'use strict';

    angular
        .module('mz.nav.brand', [])
        .directive('navBrand', navBrand)
        ;

    /* @ngInject */

    function navBrand() {

        return { template  : '<a class=""></a>'
               , restrict  : 'E'
               , require   : '^mzMaterialize'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      :link
               };

        /////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-brand brand-logo');
            transclude(scope, function (clone){ element.append(clone)});  }
      } // end function mzNavBrand
  }).call(this);