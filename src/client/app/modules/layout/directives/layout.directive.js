;(function() { 'use strict';
    angular
        .module('layout')
        .directive('layout', layout)
        ;

    /* @ngInject */
    function layout() {

        return  { restrict  : 'EA'
                , scope     : true
                , template  : '<div data-ng-transclude></div>'
                , transclude: true
                , controller: 'layoutController as vm'
                , link      : function link(scope, element, attrs, ctrl, transclude) {}
                };   }

  }).call(this);
