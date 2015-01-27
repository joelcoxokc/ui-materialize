;(function() { 'use strict';
    angular
        .module('mz.components.services.card', [])
        .provider('mzCardService', mzCardService);

    /* @ngAnotate */
    function mzCardService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Card() {
                var _this;

                _this = this;

            }

            Card.prototype.enable = function() {};

            return $injector.instantiate(Card);
        }
    }

}).call(this);
