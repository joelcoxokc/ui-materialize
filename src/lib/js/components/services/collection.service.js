;function() { 'use strict';
    angular
        .module('mz.components.services.collection', [])
        .provider('mzCollectionService', mzCollectionService);

    /* @ngAnotate */
    function mzCollectionService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Collection() {
                var _this;

                _this = this;

            }

            Collection.prototype.enable = function() {};

            return $injector.instantiate(Collection);
        }
    }

}).call(this);
