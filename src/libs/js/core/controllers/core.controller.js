;(function() {

    'use strict';

    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController);

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $TopNavigationService) {
        // $scope.mzNav = mzNavApi;
        var _this = this;

        this.$navs = {};
        this.$settings = {
            top:{},
            bottom:{},
            right:{
                actions:[]
            },
            left:{},
        };

        this.init = function(element) {
            this.element = element;

        };

        this.addNav = function(side, element, attrs, config, scope) {
            var NavService = useService(side);
            this.$navs[side] = new NavService(side, element, attrs, config, scope);
            this.$navs[side].activate();
            this.invokeRegistry(side);
            // console.log('ADD '+side.toUpperCase()+'-Nav',  this.$navs[side]);
        }

        this.invokeRegistry = function(side) {
            _.forEach(this.$settings[side].actions, function (action) {
                _this.$navs[side][action]()
            });
        }

        this.registerAction = function(side, action){

            this.$settings[side].actions.push(action);
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
