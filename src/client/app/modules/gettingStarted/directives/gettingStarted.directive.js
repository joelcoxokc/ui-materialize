;(function() { 'use strict';
    angular
        .module('gettingStarted')
        .directive('gettingStarted', gettingStarted)
        ;

    /* @ngInject */
    function gettingStarted() {
        return  { restrict  : 'EA'
                , scope     : true
                , template  : '<div data-ng-transclude></div>'
                , transclude: true
                , controller: 'gettingStartedController as vm'
                , link      : function link(scope, element, attrs, ctrl, transclude) {}
                };   }

  }).call(this);
