;(function() { 'use strict';
    angular
        .module('mz.nav.side.content', [])
        .directive('sideContent', sideContent)
        ;

    /* @ngInject */
    function sideContent() {
        return  { templateUrl : 'nav/side-content.html'
                , restrict    : 'EA'
                , scope       : true
                , replace     : true
                , transclude  : true
                , link        : function link(scope, element, attrs, ctrl, transclude) {}
                };
      }

  }).call(this);
