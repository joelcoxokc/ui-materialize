;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController)
        ;

    /* @ngAnotate */
    function mzDropdownController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
