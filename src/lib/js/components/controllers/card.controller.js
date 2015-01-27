;(function() { 'use strict';
    angular
        .module('mz.components.controllers.card', [])
        .controller('mzCardController', mzCardController)
        ;
    /* @ngAnotate */
    function mzCardController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
