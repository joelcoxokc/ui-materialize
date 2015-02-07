// ;(function() { 'use strict';
//     angular
//         .module('mz.components.dropdown', [])
//         .directive('mzDropdown', mzDropdown)
//         .directive('mzDropdownToggle', mzDropdownToggle)
//         .directive('dropdownMenu', dropdownMenu)
//         .service('$DropdownService', DropdownService)
//         .controller('DropdownCtrl', DropdownCtrl)
//         ;

//     /* @ngInject */
//     function DropdownService($document) {
//       var _this = this;
//       var openScope = null;

//       this.open = function(dropdownScope) {
//           if (!openScope) {
//               $document.bind('click'   , closeDropdown);
//               $document.bind('keydown' , escapeKeyBind);
//             }

//           if (openScope && openScope !== dropdownScope) {
//               openScope.isOpen = false;
//             }

//           openScope = dropdownScope;
//         };

//       this.close = function(dropdownScope) {
//           if (openScope === dropdownScope) {

//               openScope = null;
//               $document.unbind('click'   , closeDropdown);
//               $document.unbind('keydown' , escapeKeyBind);
//             }
//         };

//       function closeDropdown() {
//           openScope.close();
//         }
//       function escapeKeyBind(evt) {
//           if (evt.which === 27) {
//               closeDropdown();
//             }
//         }
//     }

//     /* @ngInject */
//     function DropdownCtrl($scope, $attrs, $DropdownService) {
//         var _this   = this;
//         var classes = {open:'open'};

//         this.init = function(element) {
//             this.$element = element;
//             $scope.isOpen = angular.isDefined($attrs.isOpen) ? $scope.$parent.$eval($attrs.isOpen) : false;
//           };

//         this.toggle = function(open) {
//             return $scope.isOpen = arguments.length ? !!open : !$scope.isOpen;
//           };

//         this.isOpen = function(open) {
//             return $scope.isOpen;
//           };

//         this.onToggle = function() {
//             this.dropdownMenu.toggleClass('open');
//           };

//         $scope.$watch('isOpen', function (value) {

//             value ? $DropdownService.open($scope) : $DropdownService.close($scope);


//             _this.onToggle({open: !!value});
//           });

//         $scope.$on('$locationChangeSuccess', function(){
//             $scope.isOpen = false;
//           });
//       }

//     /* @inject */
//     function mzDropdown() {
//         return  { templateUrl: 'components/dropdown.html'
//                 , restrict   : 'E'
//                 , transclude : true
//                 , replace    : true
//                 , controller : 'DropdownCtrl as drop'
//                 , scope      : {isOpen: '=?'}
//                 , link       : link
//                 };
//         function link(scope, element, attrs, ctrl) {
//             ctrl.init( element )
//           }
//       }

//     /* @inject */
//     function dropdownMenu() {
//         return  { restrict   : 'EA'
//                 , require    : '^mzDropdown'
//                 , link       : link
//                 };
//         function link(scope, element, attrs, ctrl) {
//             ctrl.dropdownMenu = element;

//           }
//       }


//     /* @inject */
//     function mzDropdownToggle() {
//         return  { restrict   : 'A'
//                 , require    : '^mzDropdown'
//                 , scope      : true
//                 , transclude : true
//                 , link       : link
//                 };
//         function link(scope, element, attrs, ctrl) {

//             ctrl.toggleElement = element;

//             element.bind('click', toggleDrop);

//             function toggleDrop(){
//               event.preventDefault();
//               event.stopPropagation();
//               scope.$apply(function() {
//                   ctrl.toggle();
//               });

//             }

//             scope.$on('$destroy', function(){
//               element.unbind('click', toggleDrop);
//             })
//           }
//       }
//   }).call(this);
