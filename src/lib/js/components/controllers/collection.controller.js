;(function() { 'use strict';

    angular
        .module('mz.components.controllers.collection', [])
        .controller('mzCollectionController', mzCollectionController)
        ;

    /* @ngAnotate */
    function mzCollectionController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);
