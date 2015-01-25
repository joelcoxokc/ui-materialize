;(function() {

    'use strict';

    angular
        .module('mz.components.services.table', [])
        .provider('mzTableService', mzTableService);

    /* @ngAnotate */
    function mzTableService($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Table() {
                var _this;

                _this = this;

            }

            Table.prototype.enable = function() {};

            return $injector.instantiate(Table);
        }
    }

}).call(this);
