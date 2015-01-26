;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.tabs', [])
        .controller('mzTabsController', mzTabsController);

    /* @ngAnotate */
    function mzTabsController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
