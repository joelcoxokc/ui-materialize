;(function() { 'use strict';

    angular
        .module('mz.components.services.ripple', [])
        .provider('mzRippleService', mzRippleService)
        ;

    /* @ngAnotate */
    function mzRippleService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Ripple() { /* var _this = this; */ }
            Ripple.prototype.enable = function() {};
            return $injector.instantiate(Ripple);
          }

      }

  }).call(this);
