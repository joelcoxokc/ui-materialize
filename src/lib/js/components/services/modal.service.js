;(function() {

    'use strict';

    angular
        .module('mz.components.services.modal', [])
        .provider('mzModalService', mzModalService);

    /* @ngAnotate */
    function mzModalService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Modal() {
                var _this;

                _this = this;

            }

            Modal.prototype.enable = function() {};

            return $injector.instantiate(Modal);
        }
    }

}).call(this);
