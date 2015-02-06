;(function() { 'use strict';
    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController)
        ;

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $LeftNavigationService, mzNavApi, $rootScope) {
        // $scope.mzNav = mzNavApi;
        // var _this = this;
        var sides = {
            right : $RightNavigationService,
            left  : $LeftNavigationService
          };
        this.$navs   = {};
        this.$settings = {  bar:{} , footer:{} , right:{actions:[]} , left:{}  };

        this.init = function(element) { this.element = element; };

        this.addBar = function(scope, element, attrs, id) {
            $NavBarDelegate.addBar(scope, element, attrs, id);
          };

        this.addNav = function(scope, element, attrs, side) {
            this.$navs[side] = new sides[side](scope, element, attrs);
            this.$navs[side].activate();
          };
      }

  }).call(this);
