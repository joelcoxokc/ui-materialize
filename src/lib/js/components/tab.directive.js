;(function() { 'use strict';

    angular
        .module('mz.components.tab', [])
        .directive('mzTab', mzTab)
        ;

    /* @inject */
    function mzTab() {
        return { template  : '<li class="tab" ><a href="{{link}}" class="pink-text text-accent-1">{{name}}</a></li>'
               , restrict  : 'E'
               , scope     : { link:'@' , name:'@' }
               , transclude: true
               , link      : function link(scope, element, attrs) {}
               };
        }

    }).call(this);
