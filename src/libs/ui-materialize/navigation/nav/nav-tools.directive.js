;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('navTools', navTools);

    /*/////////////////////     navTools

        @sub-directive     <nav-tools/>
        @parent            <mz-nav> || <mz-nav-{right | left}>
        @description       Wrap actions into groups based on the side in which the tools belong
        @options           <top | right | bottom | left>
        @attributes
        //
        //=====================
        //=====GLOBAL==========
        //  @attr              links     Add classes to all inner links/ <a> elements
        //
        //============================
        //=== NAV-TOP | NAV-BOTTOM ===
        //
        //  @parent       mz-nav   {top || bottom}
        //  @attr         side     Action group for either the left or right actions
        //  @usage
        //                <mz-nav side="top">
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
        // @parent        mz-nav   {left || right} || mz-nav-left || mz-nav-right
        // @attr          side     Action group for either top or bottom actions
        // @usage
        //                <mz-nav-left>
        //                    <nav-tools
        //                        side= <top || bottom>
        //                        mobile= <boolean>
        //                        links= <classList-for-inner links>
        //                    ></nav-tools>
        //                </mz-nav-left>
    ///////////////////////////////////////////////*/
    function navTools() {
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

            scope.childClassList = attrs.links;

            element.addClass('nav-tools');

            inner = element.children('ul');

            attrs.mobile && (scope.mobile = 'nav-mobile');

            if (attrs.side) {

                if (attrs.side === 'right' || attrs.side === 'left') {

                    element.addClass('nav-tools-'+attrs.side);
                } else {

                    console.error('Please specify side="right" or side="left" when using nav-tools');
                }
            }

            transclude(scope, function (clone) {

                inner.append(clone);
            });

            // Apply jQuery Methods
            jQuery(document).ready(function() {

                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                if (attrs.links) {
                    $(element).find('.linked').addClass(attrs.links);
                }
            });
        }
    }

}).call(this);