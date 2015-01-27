;(function() { 'use strict';
    angular
        .module('mz.components.services.tabs', [])
        .provider('mzTabsService', mzTabsService);

    /* @ngAnotate */
    function mzTabsService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Tabs() {
                var _this;

                _this = this;

            }

            Tabs.prototype.enable = function() {};

            return $injector.instantiate(Tabs);
        }
    }

}).call(this);
