;(function() { 'use strict';
    angular
        .module('mz.layout.grid', [])
        .directive('mzCol', mzCol);

    /* @inject */
    function mzCol() {
        return {
            template: '<div class="col" data-ng-class="ngClasses" data-ng-transclude></div>',
            restrict: 'EA',
            scope:{
                s:'@',
                m:'@',
                l:'@',
                offset:'@'
            },
            transclude: true,
            replace:true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            scope.ngClasses = {};

            if(attrs.s) {
                scope.ngClasses['s'+attrs.s] = !!attrs.s
            }
            if(attrs.m) {
                scope.ngClasses['m'+scope.m] = !!scope.m
            }
            if(attrs.l) {
                scope.ngClasses['l'+scope.m] = !!scope.l
            }
            if(attrs.offset) {
                scope.ngClasses['offset-'+scope.offset] = !!scope.offset
            }
            // scope.$apply()
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
