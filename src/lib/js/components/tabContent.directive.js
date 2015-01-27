;function() { 'use strict';
    angular
        .module('mz.components.tab-content', [])
        .directive('mzTabContent', mzTabContent);

    /* @inject */
    function mzTabContent() {
        return {
            template: '<div id="{{target}}" class="mz-tab-content" data-ng-transclude></div>',
            restrict: 'E',
            scope: {
                target:'@'
            },
            replace:true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
