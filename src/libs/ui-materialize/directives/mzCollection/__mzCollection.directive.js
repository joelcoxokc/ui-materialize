// ;(function() {

//     'use strict';

//     angular
//         .module('ui.materialize')
//         .directive('mzCollection', mzCollection)
//         .directive('mzCollectionItem', mzCollectionItem)
//         .service('mzCollectionItemService', mzCollectionItemService)
//         .controller('mzCollectionController', mzCollectionController);

//     /* @ngInject */
//     function mzCollectionItemService($document) {

//         var _this, _localScope;

//         _this = this;
//         _localScope = null;

//         /**
//          * [open description]
//          * @param  {Object} $scope from mzCollectionController
//          */
//         _this.open = function(itemScope) {
//             // If local scope does not exist, || item is not currently opened,
//             // Set the items scope up for a close event;
//             if (!_localScope) {
//                 $document.bind('click', closeItem);
//                 $document.bind('keydown', escapeKeyBind);
//             }

//             // If _localScope scope does exist, but is not equal to the item's scope,
//             // Set _localScope.isOpen to false;
//             if (_localScope && _localScope !== itemScope) {
//                 _localScope.isOpen = false;
//             }

//             // Set the _localScope === the item's scope

//             _localScope = itemScope;
//             console.log(_localScope);
//         };

//         /**
//          * close
//          * @param  {Object} $scope from mzCollectionController
//          *
//          * @If itemsScope is the currnlty opened Item, then reset _localScope
//          *     and close the item, and unbind the click event on the $document.
//          */
//         _this.close = function(itemScope) {

//             if (!_localScope) { return; }


//             if (_localScope === itemScope) {

//                 _localScope = null;
//                 $document.unbind('click', closeItem);
//                 $document.unbind('keydown', escapeKeyBind);
//             }
//         };

//         /**
//          * closeItem
//          * Apply the _localScope value to the current context
//          */
//         function closeItem() {

//             _localScope.$apply(function() {

//                 _localScope.isOpen = false;
//             });
//         }

//         /**
//          * Check if the current pressed key is equal to 27 (ESC);
//          * if so, invoke closeItem;
//          * @param  {Object} evt Keydown event object
//          */
//         function escapeKeyBind(evt) {

//             if (evt.which === 27) {

//                 closeItem();
//             }
//         }

//     }

//     /* @ngInject */
//     function mzCollectionController($scope, $attrs, $parse, mzCollectionItemService, $animate) {

//         var _this, openClass, toggleInvoker, getIsOpen, setIsOpen, scope;
//         /*--------------------------------------------------------*/

//         _this         = this;
//         setIsOpen     = angular.noop,
//         openClass     = 'mz-collection-open-item';
//         toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
//         // scope = $scope.$new();

//         _this.init = function(element) {
//             _this.$element = element;
//         };

//         _this.addItem = function(item){

//         };

//         *
//          * toggle       $scope.isOpen = !$scope.isOpen;
//          *              Helper for edge case for a string;
//          * @param  {String or Bool} open
//          * @return {Bool}

//         _this.toggle = function(open) {

//             // return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
//             return $scope.isOpen = !$scope.isOpen;
//         };

//         /**
//          * isOpen
//          * @return {Boolean} Set this.isOpen as a method for returning the actual value of $scope.isOpen;
//          */
//         _this.isOpen = function() {

//             return $scope.isOpen;
//         };

//         /**
//          * Watch  $scope.isOpen
//          */
//         $scope.$watch('isOpen', function (isOpen) {



//             /**
//              *  isOpen ???
//              *     $animate.addClass()
//              *  ||
//              *     $animate.removeClass()
//              */
//             $animate[isOpen ? 'addClass' : 'removeClass'](_this.$element, openClass);


//             // Now check the state of isOpen, and make the correct bindings for the next events;
//             if (isOpen) {

//                 mzCollectionItemService.open($scope);
//             } else {

//                 mzCollectionItemService.close($scope);
//             }


//             // if (angular.isDefined(isOpen) && isOpen !== wasOpen) {

//             //     toggleInvoker($scope, {open: !!isOpen});
//             // }

//         });

//         /**
//          * Kill the event and properties on location change;
//          */
//         $scope.$on('$locationChangeSuccess', function() {
//             scope.isOpen = false;
//         });
//     }

//     /* @inject */
//     function mzCollection() {
//         return {
//             template: '<section class="mz-collection" data-ng-transclude></section>',
//             restrict: 'E',
//             scope: true,
//             replace:true,
//             transclude: true,
//             controller: 'mzCollectionController',
//             link: link
//         };

//         ////////////////

//         function link(scope, element, attrs, ctrl) {
//             ctrl.init(element);
//             ///////////////////////////////

//             /**
//              *      toggle
//              *      @description
//              *      @param  {Object}        description
//              *      @return {Object}        description
//              */
//             function toggle (param) {}

//         }
//     }

//     /* @inject */
//     function mzCollectionItem() {
//         return {
//             template: '<div class="mz-collection-item" data-ng-transclude></div>',
//             restrict: 'E',
//             require:'^mzCollection',
//             scope: true,
//             transclude: true,
//             replace:true,
//             link: link
//         };

//         ////////////////

//         function link(scope, element, attrs, ctrl) {

//             ctrl.addItem(element);

//             element.bind('click', toggleItemOpenState);

//             ///////////////////////////////

//             /**
//              * toggleItemOpenState
//              * Case for whether user selects a link
//              * @param  {Object} event Click
//              */
//             function toggleItemOpenState(event) {

//                 event.preventDefault();
//                 scope.$apply(function() {
//                     ctrl.toggle();
//                 });
//             }

//             scope.$on('$destroy', function() {

//                 element.unbind('click', toggleItemOpenState);
//             });
//         }
//     }

// }).call(this);
