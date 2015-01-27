;(function() { 'use strict';
    angular
        .module('mz.components.services.dialog', [])
        .provider('mzDialogService', mzDialogService);

    /* @ngAnotate */
    function mzDialogService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Dialog() {
                var _this;

                _this = this;

            }

            Dialog.prototype.enable = function() {};

            return $injector.instantiate(Dialog);
        }
    }

}).call(this);
