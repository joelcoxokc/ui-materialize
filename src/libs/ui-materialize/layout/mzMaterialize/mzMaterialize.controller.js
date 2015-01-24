;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .controller('mzController', mzController)

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $TopNavigationService) {
        // $scope.mzNav = mzNavApi;
        var _this = this;

        this.$navs = {};

        this.init = function(element) {
            this.element = element;

        };

        this.addNav = function(side, element, attrs, config, scope) {
            var NavService = useService(side);
            this.$navs[side] = new NavService(side, element, attrs, config, scope);
            this.$navs[side].activate();
            console.log('ADD '+side.toUpperCase()+'-Nav',  this.$navs[side]);
        }


        // $scope.addClass = function(classList) {
        //     this.element.addClass(classList)
        // };
        // $scope.removeClass = function(classList) {
        //     this.element.addClass(classList)
        // };

        function useService(service){
            var services;

            services = {
                right: $RightNavigationService,
                top:   $TopNavigationService
            };
            return services[service];
        }

    }

}).call(this);
