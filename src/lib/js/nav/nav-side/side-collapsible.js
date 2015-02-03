;(function() { 'use strict';

    angular
        .module('mz.nav.side.collapsible', ['mz.nav.side.collapse'])
        .directive('sideCollapsible', sideCollapsible)
        ;

    /* @ngInject */
    function sideCollapsible() {

        return {  templateUrl: 'nav/side-collapsible.html'
               , restrict   : 'E'
               , scope      : true
               , replace    : true
               , transclude : true
               , controller : controller
               , link       : link
               };

        /* @ngInject */
        function controller() {

            this.children = {};

            this.init = function(element) {
                this.element = element;
            }
        }

        function link(scope, element, attrs, ctrl, transclude) {

                var globalSides = {  top:{} , right:{} , bottom:{} , left:{}  };
                var inner = element.children('ul');

                ///  @scope   childClassList
                ///  @scope   mobile
                scope.childClassList = attrs.links;
                attrs.mobile &&( scope.mobile = 'nav-mobile' );

                ///  @class   inner
                ///  @class   element

                if(attrs.side && globalSides[attrs.side]) {
                    element.addClass('side-collapsible-'+attrs.side); }

                jQuery(document).ready(function() {
                    attrs.links && $(element).find('.linked').addClass(attrs.links);
                    $(element).collapsible();
                });
            } // end function link
    } }).call(this);