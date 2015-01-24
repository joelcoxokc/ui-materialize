;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Layout', $Layout)

        function $Layout() {

            var _this = this;


            // Initialize this api
            this.initialize = function(params) {

            }
            this.$get = function() {
                var instance = {};
                return instance;
            }
        }

}).call(this);
