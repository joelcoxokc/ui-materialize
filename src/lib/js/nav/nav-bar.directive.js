;function() { 'use strict';
    angular
        .module('mz.nav.bar', [])
        .directive('mzNav', mzNav);


    /* @inject */
    function mzNav($rootScope, $document) {
        return {
            templateUrl: 'templates/mzNav.template.html',
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
(function() {
    /*
     *  TEMPLATE mz-nav
     */
    angular
        .module('ui.materialize')
        .run(["$templateCache", function($templateCache) {
            $templateCache.put('templates/mzNav.template.html',

                  '<nav class="{{color}} mz-nav-container nav-container-top">'+

                    '<mz-nav-brand ng-if="brand" class="">{{brand}}</mz-nav-brand>'+
                    '<div data-ng-if="view" class="mz-nav-container-view" ui-view="{{view}}"></div>'+

                  '</nav>'
            )
        }]);
}).call(this);

