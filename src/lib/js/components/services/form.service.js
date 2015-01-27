;(function() { 'use strict';

    angular
        .module('mz.components.services.form', [])
        .provider('mzFormService', mzFormService)
        ;

    /* @ngAnotate */
    function mzFormService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Form() { /* var _this = this; */ }
            Form.prototype.enable = function() {};
            return $injector.instantiate(Form);
          }

      }

  }).call(this);
