;function() { 'use strict';
    angular
        .module('mz.components.services.dropdown', [])
        .provider('mzDropdownService', mzDropdownService);

    /* @ngAnotate */
    function mzDropdownService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Dropdown() {
                var _this;

                _this = this;

            }

            Dropdown.prototype.enable = function() {};

            return $injector.instantiate(Dropdown);
        }
    }

}).call(this);
