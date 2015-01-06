;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzInclude', mzInclude);

    /* @inject */
    function mzInclude() {
        return {
            restrict: 'E',
            link: link
        };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (clone) {
                element.append(clone);
            });
        }
    }

}).call(this);
