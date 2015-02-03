;(function() { 'use strict';
    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible)
        .directive('collapseHeader', collapseHeader)
        .directive('collapseBody', collapseBody)
        ;

    /* @inject */
    function mzCollapsible() {
        return  { templateUrl : 'components/collapsible.html'
                , restrict    : 'E'
                , scope       : {type:'@'}
                , transclude  : true
                , replace     : true
                , link        : link
                };
        function link(scope, element, attrs) {
            scope.type ||( scope.type = 'accordion' );
            $(element).collapsible();
          }
      }

    function collapseHeader() {
        return function link(scope, element, attrs) { element.addClass('collapsible-header'); }   }

    function collapseBody() {
        return function link(scope, element, attrs) { element.addClass('collapsible-body'  ); }   }

  }).call(this);
