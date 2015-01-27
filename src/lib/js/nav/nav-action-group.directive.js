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

        return { template  : '<ul id="{{mobile}}" class="side-nav"></ul>'
               , restrict  : 'E'
               , controller: function(){}
               , scope     : true
               , transclude: true
               , link      : link
               };

        /////////////

        function link(scope, element, attrs, ctrl, transclude) {
          var inner = element.children('ul');

            ///  @scope   childClassList
            ///  @scope   mobile
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');
            element.addClass('nav-action-group');

            ///  @validate   the requested group location
            if (attrs.side) {
                if (globalSides[attrs.side]) { element.addClass('nav-action-group-'+attrs.side); }
                else { console.error('Please specify side="<top | right | bottom |left>" when using nav-action-group'); }  }

            ///  @translucde   Transclude element to the child <ul>
            transclude(scope, function (clone){inner.append(clone);});

            //////     @jQuery   apply jQuery methods when dom is ready;
            jQuery(document).ready(function() {
                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                attrs.links && $(element).find('.linked').addClass(attrs.links);  });
          }
      }
  }).call(this);