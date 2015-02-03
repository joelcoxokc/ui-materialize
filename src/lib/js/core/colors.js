;(function() { 'use strict';
    angular
        .module('mz.core.colors', [])
        .directive('zBg', zBg)
        .directive('zText', zText)
        ;

    /* @inject */
    function zBg() {
        return function link(scope, element, attrs) {
            element.addClass(attrs.zBg);
            attrs.db &&( element.addClass('darken-' +attrs.db) );
            attrs.lb &&( element.addClass('lighten-'+attrs.lb) );
          };
      }

    /* @inject */
    function zText() {
        return function link(scope, element, attrs) {
            element.addClass(attrs.zText + '-text');
            attrs.lt &&( element.addClass('text-lighten-'+attrs.lt) );
            attrs.dt &&( element.addClass('text-darken-' +attrs.dt) );
          };
      }

  }).call(this);
