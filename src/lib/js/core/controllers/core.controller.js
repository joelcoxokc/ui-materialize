;(function() { 'use strict';

    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController)
        ;

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $NavBarService, mzNavApi, $rootScope) {
        // $scope.mzNav = mzNavApi;
        // var _this = this;

        this.$navs = {};
        this.$settings = {  top:{} , bottom:{} , right:{actions:[]} , left:{}  };
        console.log(mzNavApi);

        this.init = function(element) { this.element = element; };

        this.addNav = function(side, element, attrs, config, scope) {
            var NavService = useService(side);
            this.$navs[side] = new NavService(side, element, attrs, config, scope);
            this.$navs[side].activate();
            this.invokeRegistry(side);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                // mzNavApi.config.navBar.hideOn[state.name] ? element.addClass('hidden') : element.removeClass('hidden');
              });
          }

        this.invokeRegistry = function(side) {
            _.forEach(this.$settings[side].actions, function(action){ _this.$navs[side][action](); });   }

        this.registerAction = function(side, action){ this.$settings[side].actions.push(action); }

        // function useService(service){
        //     return { right:$RightNavigationService , top:$NavBarService }[service]; }

      }

  }).call(this);
