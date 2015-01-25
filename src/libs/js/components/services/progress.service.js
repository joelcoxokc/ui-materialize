;(function() {

    'use strict';

    angular
        .module('mz.components.services.progress', [])
        .provider('mzProgressService', mzProgressService);

    /* @ngAnotate */
    function mzProgressService($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Progress() {
                var _this;

                _this = this;

            }

            Progress.prototype.enable = function() {};

            return $injector.instantiate(Progress);
        }
    }

}).call(this);
