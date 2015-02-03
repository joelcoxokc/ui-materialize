;(function() { 'use strict';
    angular
        .module('mz.components.services.collapsible', [])
        .provider('mzCollapsibleService', mzCollapsibleService)
        ;

    /* @ngAnotate */
    function mzCollapsibleService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Collapsible() { /* var _this = this; */ }
            Collapsible.prototype.enable = function() {};
            return $injector.instantiate(Collapsible);
          }
      }

  }).call(this);
