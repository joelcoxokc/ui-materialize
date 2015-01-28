;(function() { 'use strict';

    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible)
        ;

    /* @inject */
    function mzCollapsible() {
        return  { templateUrl : 'templates/mzCollapsible.view.html'
                , restrict    : 'E'
                , scope       : true
                , transclude  : true
                , link        : function link(scope, element, attrs) {}
                };
      }

  }).call(this);
