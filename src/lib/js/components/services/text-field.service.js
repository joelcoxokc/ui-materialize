;(function() { 'use strict';
    angular
        .module('mz.components.services.text-field', [])
        .provider('mzTextFieldService', mzTextFieldService);

    /* @ngAnotate */
    function mzTextFieldService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function TextField() {
                var _this;

                _this = this;

            }

            TextField.prototype.enable = function() {};

            return $injector.instantiate(TextField);
        }
    }

}).call(this);
