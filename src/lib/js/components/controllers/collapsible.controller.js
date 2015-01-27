;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collapsible', [])
        .controller('mzCollapsibleController', mzCollapsibleController);

    /* @ngAnotate */
    function mzCollapsibleController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
