;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.progress', [])
        .controller('mzProgressController', mzProgressController);

    /* @ngAnotate */
    function mzProgressController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
