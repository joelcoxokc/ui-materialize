;(function() { 'use strict';
    angular
        .module('mz.components.controllers.media', [])
        .controller('mzMediaController', mzMediaController);

    /* @ngAnotate */
    function mzMediaController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
