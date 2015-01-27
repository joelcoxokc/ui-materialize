;(function() { 'use strict';
    angular
        .module('mz.components.controllers.select', [])
        .controller('mzSelectController', mzSelectController);

    /* @ngAnotate */
    function mzSelectController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
