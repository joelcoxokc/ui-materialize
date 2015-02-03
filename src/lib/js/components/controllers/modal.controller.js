;(function() { 'use strict';
    angular
        .module('mz.components.controllers.modal', [])
        .controller('mzModalController', mzModalController)
        ;

    /* @ngAnotate */
    function mzModalController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
