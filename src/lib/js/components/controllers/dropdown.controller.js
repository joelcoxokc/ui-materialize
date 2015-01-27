;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController)
        ;
    /* @ngAnotate */
    function mzDropdownController($scope) {
        var _this = this; // FIXME: Is this some Angular magic, or does _this get immediately discarded
        this.init = function(element) { this.element = element; };  }
  }).call(this);