;(function() { 'use strict';

    angular
        .module('mz.nav.action', [])
        .directive('navAction', navAction)
        ;

    /*

    @ngInject
    */
    function navAction() {

        return { templateUrl: 'nav/action.html'
               , require    : '^navActionGroup'
               , restrict   : 'E'
               , transclude : true
               , replace    : true
               , scope      : true
               , link       : link
               };

        //////////////

        function link(scope, element, attrs, ctrl, transclude) {

            var inner   = element.children();
            scope.icon  = attrs.icon  || null;
            scope.link  = attrs.link  || null;
            scope.label = attrs.label || null;
            scope.waves = (attrs.waves ? 'waves-effect waves-'+attrs.waves : '');

            transclude(scope, function (clone){ inner.append(clone); });   }

    } }).call(this);