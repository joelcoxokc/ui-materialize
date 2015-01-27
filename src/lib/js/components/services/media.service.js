;function() { 'use strict';
    angular
        .module('mz.components.services.media', [])
        .provider('mzMediaService', mzMediaService);

    /* @ngAnotate */
    function mzMediaService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Media() {
                var _this;

                _this = this;

            }

            Media.prototype.enable = function() {};

            return $injector.instantiate(Media);
        }
    }

}).call(this);
