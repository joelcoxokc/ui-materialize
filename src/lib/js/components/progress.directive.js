;(function() { 'use strict';
    angular
        .module('mz.components.progress', [])
        .directive('mzProgress', mzProgress)
        ;

    /* @inject */
    function mzProgress() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzProgress.view.html',
      }

  }).call(this);
