;function() { 'use strict';
    angular
        .module('mz.components.controllers.tooltip', [])
        .controller('mzTooltipController', mzTooltipController);

    /* @ngAnotate */
    function mzTooltipController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
