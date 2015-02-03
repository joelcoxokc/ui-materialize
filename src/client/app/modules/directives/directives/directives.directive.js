;(function() { 'use strict';
    angular
        .module('directives')
        .directive('directives', directives)
        ;

    /* @ngInject */
    function directives() {
        return  { restrict  : 'EA'
                , scope     : true
                , template  : '<div data-ng-transclude></div>'
                , transclude: true
                , controller: 'directivesController as vm'
                , link      : function link(scope, element, attrs, ctrl, transclude) {}
                };
      }
  }).call(this);
