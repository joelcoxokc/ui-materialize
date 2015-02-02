;(function() { 'use strict';

    angular
        .module('mz.components.controllers.dialog', [])
        .controller('mzDialogController', mzDialogController)
        ;

    /* @ngAnotate */
    function mzDialogController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
