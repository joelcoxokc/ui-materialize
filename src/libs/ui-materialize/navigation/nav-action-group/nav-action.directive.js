;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('navAction', navAction)

    /*
         navAction
    ===================

        @sub-directive   |  <nav-action/>
        @parent          |  <nav-tools> || <nav-tools-{top | right | bottom | left}>
        @description     |  Navigation actions
        @template        |  <li><a></a></li>

        @attributes
            //=====================
            //=====GLOBAL==========
            //  @attr   | waves
            //          | @options <true | light | red | yellow | orange | purple | green | teal>
            //          | @default = light
            //
            //  @attr   | state
            //          | ui-sref: provide a state
            //
            //  @attr   | link
            //          | href: provide a url location
            //
            //  @attr   | icon
            //          | appends a <i class="<icon-value>"></i>
            //
            //  @usage
            //          <nav-action
            //          waves= <true | light | red | yellow | orange | purple | green | teal>
            //          state= some.state
            //          ></nav-action>
            //
    ========*/
    /* @ngInject */
    function navAction() {
        return {
            template:   '<li>'+
                            '<a class="{{waves}}" data-ng-class="childClassList" ui-sref="state">' +
                                '<i data-ng-if="icon" class="{{icon}}"></i>'+
                            '</a>'+
                            // '<a data-ng-if="link" class="{{waves}}" data-ng-class="childClassList" href="{{link}}">'+
                            //     '<i data-ng-if="icon" class="{{icon}}"></i>'+
                            // '</a>'+
                        '</li>',
            restrict : 'E',
            require: '^navActionGroup',
            scope: true,
            replace:true,
            transclude: true,
            link:link
        };

        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;

            inner = element.children();

            //////
            //////     @scope   state  |  set the state for ui-sref if attribute is passed
            //////     @scope   link   |  set the link for href if attribute is passed
            //////     @scope   waves  |  set waves on scope, or default wave is specified. otherwise no waves will be used
            //////
            scope.state = attrs.state  || null;
            scope.link  = attrs.link   || null;
            scope.icon  = attrs.icon   || null;


            if (attrs.waves) {
                scope.waves = 'waves-effect ';
            }
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {

                scope.waves += 'waves-'+attrs.waves;
            } else {

                scope.waves += 'waves-light';
            }

            //////
            //////     @transclude  |  transclude the actions
            //////
            transclude(scope, function (clone) {
                inner.append(clone);
            });
        }
    }

}).call(this);