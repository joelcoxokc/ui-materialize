;(function() { 'use strict';

    angular
        .module('mz.components.controllers.text-field', [])
        .controller('mzTextFieldController', mzTextFieldController)
        ;

    /* @ngAnotate */
    function mzTextFieldController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
