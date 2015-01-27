;(function() { 'use strict';
    angular
        .module('mz.nav.action-group', [])
        .directive('mzNavActions', mzNavActions)
        .directive('navActionGroup', navActionGroup);

    ////////////////////
    /// Global Variables
    var globalSides;

    globalSides = {
        top:{},
        right:{},
        bottom:{},
        left:{}
    };

    /* @ngInject */
    function mzNavActions(){
         return {
            restrict : 'E',
            controller:function(){},
            scope: true,
            transclude: true,
            link:link
        };
        ////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-actions')
            transclude(scope, function (clone) {

                element.append(clone);
            });
        }
    }

    /*
        navActionGroup
    ===================

        @sub-directive  |  <nav-action-group/>
        @parent         |  <mz-nav> || <mz-nav-{right | left}>
        @description    |  Wrap actions into groups based on the side in which the tools belong
        @options        |  <top | right | bottom | left>

        @attributes
            //=====================
            //=====GLOBAL==========
            //  @attr  | links     Add classes to all inner links/ <a> elements
            //
            //============================
            //=== NAV-TOP | NAV-BOTTOM ===
            //
            //  @parent   |   mz-nav   {top || bottom}
            //  @attr     |   side     Action group for either the left or right actions
            //  @usage    |
            //            |   <mz-nav side="top">
            //                    <nav-tools
            //                        side= <left || right>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav>
            //
            //============================
            //=== NAV-RIGHT | NAV-LEFT ===
            //
            // @parent      |  mz-nav   {left || right} || mz-nav-left || mz-nav-right
            // @attr        |  side     Action group for either top or bottom actions
            // @usage       |
            //              | <mz-nav-left>
            //                    <nav-tools
            //                        side= <top || bottom>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav-left>
    ========*/
    /* @ngInject */
    function navActionGroup() {
        return {
            template: '<ul id="{{mobile}}" class="side-nav"></ul>',
            restrict : 'E',
            controller:function(){},
            scope: true,
            transclude: true,
            link:link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var inner;

            //////
            //////     @scope   childClassList
            //////     @scope   mobile
            //////
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');

            element.addClass('nav-action-group');
            inner = element.children('ul');


            //////
            //////     @validate   the requested group location
            //////
            if (attrs.side) {
                if (globalSides[attrs.side]) {
                    element.addClass('nav-action-group-'+attrs.side);
                } else {
                    console.error('Please specify side="<top | right | bottom |left>" when using nav-action-group');
                }
            }

            //////
            //////     @translucde   Transclude element to the child <ul>
            //////
            transclude(scope, function (clone) {
                inner.append(clone);
            });

            //////
            //////     @jQuery   apply jQuery methods when dom is ready;
            //////
            jQuery(document).ready(function() {

                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                if (attrs.links) {
                    $(element).find('.linked').addClass(attrs.links);
                }
            });
        }
    }

}).call(this);