;(function() { 'use strict';
    angular
        .module('mz.components.services.select', [])
        .provider('mzSelectService', mzSelectService);

    /* @ngAnotate */
    function mzSelectService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Select() {
                var _this;

                _this = this;

            }

            Select.prototype.enable = function() {};

            return $injector.instantiate(Select);
        }
    }

}).call(this);
