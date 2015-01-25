;;(function() {

    'use strict';

    angular
        .module('mz.components.collection', [])
        .directive('mzCollection', mzCollection)
        .directive('mzCollectionItem', mzCollectionItem);
        // .service('mzCollectionItemService', mzCollectionItemService)
        // .controller('mzCollectionController', mzCollectionController);

    /* @inject */
    function mzCollection() {
        return {
            // template: '<section class="mz-collection" data-ng-transclude></section>',
            // scope: true,
            // replace:true,
            // transclude: true,
            scope: {},
            restrict: 'E',
            controller: controller,
            link: link
        };

////////////////////////////////////////////////////////////////////////////////////

        //////
        //////     @mz-collection  CONTROLLER
        //////
        function controller($scope, $animate) {
            var _this, selectedItem, selectedItemIndex, itemHasOptions,
            showItemOptions, itemClasses, collectionClasses, itemindexes;

            selectedItem      = null;
            selectedItemIndex = null;

            _this = this;
            _this.isOpen = false;
            _this.itemindexes = {};
            _this.items       = [];

            _this.itemClasses = {
                $hasOptions:  'mz-ci-has-options',
                $isSelected:  'mz-ci-selected',
                $isExpanded:  'mz-ci-expanded',
                $isFolded:    'mz-ci-folded',
                $hasIcon:     'mz-ci-has-icon'
            };

            collectionClasses = {
                hasItems:    'mz-c-has-items',
                hasExpanded: 'mz-c-has-expanded'
            };

            /*-----------------------------



            */

            _this.selectedIndex = function() {
                return _this.items.indexOf(selectedItem);
            }

            _this.setItemDefaults = function (item) {
                item.$isSelected  = false;
                item.$hasOptions  = item.$hasOptions || false;
                item.$isExpanded  = item.$isExpanded || false;
                item.$isFolded    = item.$isFolded   || true;
                item.$hasIcon     = item.$hasIcon    || true;
                return item;
            };

            _this.add = function(item) {

                // itemindexes[item.$id]
                item = _this.setItemDefaults(item);
                _this.items[item.$index] = item

            };

            _this.remove = function(item) {
                var itemIndex

                itemIndex = _this.items.indexOf(item);

                if (index === -1) {
                    return;
                }

                // If the item is currently selected, deselect it.
                if (item.$itemSelected) {
                    _this.deselect(item);
                }
                _this.items.splice(itemIndex, 1);
            };

            _this.select = function(item, shouldEmitEvent) {

                if(item.$index === selectedItemIndex){
                    return _this.deselect(item);
                }

                var itemIndex;
                if(!item.$id && item.$id !== 0){
                    return;
                }

                itemIndex = item.$index;

                if(!_this.items[itemIndex]){
                    console.error('Unable to find item at index of', sopeIndex);
                    return;
                }

                if(selectedItem){
                   _this.deselect(selectedItem);
                }

                selectedItem = item;
                selectedItemIndex = itemIndex;

                item.$isSelected = true;


                (item.onSelect || angular.noop)();

                if (shouldEmitEvent) {
                    $scope.$emit('$mzCollectionItem.change', {
                        type: 'item',
                        itemIndex: itemIndex,
                        item:item
                    });
                }
                _this.expandItem(item);
            };


            _this.deselect = function(item) {

                if (item.$isSelected) {
                    selectedItem = selectedItemIndex = null;
                    item.$isSelected = false;
                    item.$isExpanded = false;
                    (item.onDeselect || angular.noop)();
                    item.$broadcast && item.$broadcast('$itemDeselected');
                }
            };

            _this.foldItem   = function (item) {

            };
            _this.expandItem = function (item) {

            };

            _this.toggleItemSelected = function() {
                _this.isOpen = !_this.isOpen;
            }
            //////////////////////////////
        }

        //////
        //////     @mz-collection  LINK
        //////
        function link(scope, element, attrs, ctrl) {
            // ctrl.init(element);

            ///////////////////////////////

        }
    }

    /* @inject */
    function mzCollectionItem($animate, $document) {
        return {
            // template: '<div class="mz-collection-item" data-ng-transclude></div>',
            // scope: true,
            // transclude: true,
            // replace:true,
            restrict: 'E',
            require:'^mzCollection',
            link: link
        };

        ////////////////


        //////
        //////     @mz-collection-item  LINK
        //////
        function link(scope, element, attrs, api) {
            var $content;

            element.addClass('mz-collection-item');

            // console.log(scope.$id);
            scope.$element = element;
            scope.attrs    = attrs;

            api.add(scope);

            $content = $(element).find('.mz-collection-item-content');

            element.bind('click', toggleItemOpenState);

            ///////////////////////////////

            scope.onSelect = function() {

                var timeline = new TimelineLite();
                timeline
                    .to(element, 0.2,
                        {
                            ease:Cubic.easeInOut,
                            marginTop:'10px',
                            marginBottom:'10px',
                            boxShadow:'0 8px 15px rgba(0,0,0,0.1)',
                            marginLeft:'-80',
                            marginRight:'-80',
                            width:'+=160px',
                        })

                    .to($content, 0.2,
                        {
                            ease:Cubic.easeIn,
                            display:'block',
                            maxHeight: '100%',
                            autoAlpha:1
                        },0.1)

            }

            scope.onDeselect = function() {
                TweenMax.to(scope.$element, 0.2,
                    {
                        ease:Cubic.easeInOut,
                        marginLeft:'0',
                        marginRight:'0',
                        width:'-=160px',
                        marginTop:'0',
                        marginBottom:'0'
                    })
                TweenMax.to($content, 0.2,
                    {
                        ease:Cubic.easeIn,
                        autoAlpha:0,
                        maxHeight: '0%',
                        display:'none',
                    })
            }

            /**
             * toggleItemOpenState
             * Case for whether user selects a link
             * @param  {Object} event Click
             */
            function toggleItemOpenState(event) {

                event.preventDefault();
                scope.$apply(function() {

                    api.select(scope);
                });
                // console.log(api.selectedIndex());
            }

            scope.$on('$destroy', function() {

                element.unbind('click', toggleItemOpenState);
            });
        }
    }

}).call(this);
