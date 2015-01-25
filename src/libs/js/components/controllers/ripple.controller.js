;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.ripple', [])
        .controller('mzRippleController', mzRippleController);

    /* @ngAnotate */
    function mzRippleController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
