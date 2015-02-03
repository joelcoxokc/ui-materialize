;(function() { 'use strict';
    angular
        .module('mz.nav.brand', [])
        .directive('barBrand', barBrand)
        ;

    /* @ngInject */
    function barBrand() {
        return  { templateUrl : 'nav/bar-brand.html'
                , restrict    : 'E'
                , require     : '^mzMaterialize'
                , scope       : true
                , transclude  : true
                , replace     : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {}
      }

  }).call(this);
