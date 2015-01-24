;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('navAction', navAction);

    /*/////////////////////     navAction

        @sub-directive     <nav-action/>
        @parent            <nav-tools> || <nav-tools-{top | right | bottom | left}>
        @description       Navigation actions
        @template          <li><a></a></li>
        @attributes
        //
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
    ///////////////////////////////////////////////*/
    function navAction() {
        return {
            template:   '<li>'+
                            '<a data-ng-if="state" class="{{waves}}" data-ng-class="childClassList" ui-sref="{{state}}" data-ng-transclude></a>'+
                            '<a data-ng-if="link" class="{{waves}}" data-ng-class="childClassList" href="{{link}}" data-ng-transclude></a>'+
                        '</li>',
            restrict : 'E',
            require: '^navTools',
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

            inner = element.children('a');

            if (attrs.state) scope.state = attrs.state;
            if (attrs.link) scope.link = attrs.link;

            if (attrs.waves) {
                scope.waves = 'waves-effect ';
            }
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {

                scope.waves += 'waves-'+attrs.waves;
            } else {

                scope.waves += 'waves-light';
            }

            transclude(scope, function (clone) {
                inner.append(clone);
            });
        }
    }

}).call(this);