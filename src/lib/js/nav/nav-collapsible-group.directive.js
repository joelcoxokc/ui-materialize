;(function() { 'use strict';
    angular
        .module('mz.nav.collapsible-group', ['mz.nav.collapse'])
        .directive('navCollapsibleGroup', navCollapsibleGroup)
        ;

    /* @ngInject */
    function navCollapsibleGroup() {

        return {  templateUrl: 'nav/nav-collapsible-group.template.html',
                  restrict   : 'E'             ,
                  scope      : true            ,
                  controller : controller      ,
                  link       : link            };

        //////////////

        function controller() {}

        function link(scope, element, attrs, ctrl, transclude) {

                var globalSides = {  top:{} , right:{} , bottom:{} , left:{}  };
                var inner = element.children('ul');

                ///  @scope   childClassList
                ///  @scope   mobile
                scope.childClassList = attrs.links;
                attrs.mobile && (   scope.mobile = 'nav-mobile'   );

                ///  @class   inner
                ///  @class   element
                inner.addClass('collapsible collapsible-accordion');
                element.addClass('nav-collapsible-group');

                if(attrs.side && globalSides[attrs.side]) {
                    element.addClass('nav-collapsible-group-'+attrs.side); }

                jQuery(document).ready(function() {
                    attrs.links && $(element).find('.linked').addClass(attrs.links);  });

            }
    } }).call(this);
