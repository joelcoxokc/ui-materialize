;(function() { 'use strict';
    angular
        .module('mz.components.media', [])
        .directive('mzMedia', mzMedia)
        ;

    /* @inject */
    function mzMedia() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzMedia.view.html',
      }

  }).call(this);
