;(function() {

    'use strict';

    angular
        .module('mz.nav.footer', [])
        .directive('mzNavFooter', mzNavFooter);


    /* @inject */
    function mzNavFooter($rootScope, $document) {
        return {
            // templateUrl: 'templates/mzNav.template.html',
            restrict: 'E',
            require:'^mzMaterialize',
            // scope:true,
            scope: {
                color: '@',
                side:  '@',
                fixed: '@',
                brand: '@',
                view:  '@',
                size:  '@'
            },
            transclude: true,
            link: link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var side, config;

            config = {};

            side = 'top' || attrs.side;
            scope.side = side

            attrs.fixed && (config.fixed = true);
            attrs.size &&  (config[attrs.size] = true);

            ctrl.addNav(side, element, attrs, config, scope);

            transclude(scope, function (clone) {
                element.find('nav').append(clone);
            });
        }
    }


}).call(this);
