;(function(){ 'use strict';
    angular
        .module('ui.materialize.api')
        .provider('$System', System)
        ;

        function System() {
            var _this = this;

            // Initialize this api
            this.initialize = function(params) {};

          this.$get = function() {  return {};  };

      }

  }).call(this);
