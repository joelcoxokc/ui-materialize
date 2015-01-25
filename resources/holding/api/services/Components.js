;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Components', Components);

        function Components() {

            var _this = this;


                // Initialize this api
            this.initialize = function(params) {
                angular.extend(this, params);
            }

            this.$get = function() {
                return {
                    method:function(){}
                }
            }


        }

}).call(this);