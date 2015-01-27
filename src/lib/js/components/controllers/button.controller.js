;function() { 'use strict';
    angular
        .module('mz.components.controllers.button', [])
        .controller('mzButtonController', mzButtonController);

    /* @ngAnotate */
    function mzButtonController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
