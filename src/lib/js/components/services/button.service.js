;(function() {

    'use strict';

    angular
        .module('mz.components.services.button', [])
        .provider('mzButtonService', mzButtonService);

    /* @ngAnotate */
    function mzButtonService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Buttons() {
                var _this;

                _this = this;

            }

            Buttons.prototype.enable = function() {};

            return $injector.instantiate(Buttons);
        }
    }

}).call(this);
