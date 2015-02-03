;(function() { 'use strict';
    angular
        .module('mz.components.services.tooltip', [])
        .provider('mzTooltipService', mzTooltipService)
        ;

    /* @ngAnotate */
    function mzTooltipService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Tooltip() { /* var _this = this; */ }
            Tooltip.prototype.enable = function() {};
            return $injector.instantiate(Tooltip);
          }
      }

  }).call(this);
