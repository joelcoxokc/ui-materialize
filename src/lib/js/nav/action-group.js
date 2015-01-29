;(function() { 'use strict';

    angular
        .module('mz.nav.action-group', [])
        .directive('navActionGroup', navActionGroup)
        ;

    ////////////////////
    /// Global Variables
    var globalSides = { top:{} , right:{} , bottom:{} , left:{} };

    /* @ngInject */
    function navActionGroup() {

        return { templateUrl : 'nav/action-group.html'
               , restrict    : 'E'
               , controller  : function(){}
               , scope       : {side:'@'}
               , replace     : true
               , transclude  : true
               , link        : link
               };

        /////////////

        function link(scope, element, attrs, ctrl, transclude) {
          var inner = element.children('ul');

            ///  @scope   childClassList
            ///  @scope   mobile
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');
            scope.side = 'nav-action-group-'+scope.side;


            //////     @jQuery   apply jQuery methods when dom is ready;
            jQuery(document).ready(function() {
                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                attrs.links && $(element).find('.linked').addClass(attrs.links);  });
          }
      }
  }).call(this);