;(function() { 'use strict';
    angular
        .module('mz.components.controllers.form', [])
        .controller('mzFormController', mzFormController)
        ;
    /* @ngAnotate */
    function mzFormController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);