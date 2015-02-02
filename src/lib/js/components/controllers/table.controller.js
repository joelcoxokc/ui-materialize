;(function() { 'use strict';

    angular
        .module('mz.components.controllers.table', [])
        .controller('mzTableController', mzTableController)
        ;

    /* @ngAnotate */
    function mzTableController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
