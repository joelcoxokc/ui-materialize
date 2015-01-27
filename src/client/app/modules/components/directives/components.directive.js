;(function() { 'use strict';
    angular
        .module('components')
        .directive('components', components)
        ;

    /* @ngInject */
    function components() {
        return  { restrict  : 'EA'
                , scope     : true
                , template  : '<div data-ng-transclude></div>'
                , transclude: true
                , controller: 'componentsController as vm'
                , link      : function link(scope, element, attrs, ctrl, transclude) {}
                };   }
  }).call(this);
