// ;(function() { 'use strict';
//     angular
//         .module('mz.core.ctrl', [])
//         .controller('mzController', mzController)
//         ;

//     /* @ngAnotate */
//     function mzController($scope, $q, $RightNavigationService, $LeftNavigationService, $NavBarService, mzNavApi, $rootScope) {
//         // $scope.mzNav = mzNavApi;
//         // var _this = this;
//         var sides = {
//             right : $RightNavigationService,
//             left  : $LeftNavigationService
//           };
//         this.$navs = {};
//         this.$settings = {  top:{} , bottom:{} , right:{actions:[]} , left:{}  };

//         this.init = function(element) { this.element = element; };

//         this.addNav = function(scope, element, attrs, side) {
//             this.$navs[side] = new sides[side](scope, element, attrs);
//             this.$navs[side].activate();
//           };
//       }

//   }).call(this);
