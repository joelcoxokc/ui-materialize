;(function() {
    'use strict';

    angular
        .module('ui.materialize')
        // .animation( '.mz-left-open', leftOpen )

    /* @ngInject */
    function leftOpen($animate) {
        return {
            addClass: function(element, className) {
                console.log(className);
            }
        }
    }

}).call(this);