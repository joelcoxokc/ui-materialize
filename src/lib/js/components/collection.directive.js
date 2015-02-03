;(function() { 'use strict';
    angular
        .module('mz.components.collection', [])
        .directive('mzCollection', mzCollection)
        .directive('mzCollectionItem', mzCollectionItem)
        // .service('mzCollectionItemService', mzCollectionItemService)
        // .controller('mzCollectionController', mzCollectionController)
        ;

    /* @inject */
    function mzCollection() {
        return { scope:{} , restrict: 'E' , controller: controller , link:link };
        // template: '<section class="mz-collection" data-ng-transclude></section>', scope:true, replace:true, transclude:true,

        ///  @mz-collection  CONTROLLER
        function controller($scope, $animate) {
            // var itemHasOptions,  showItemOptions, itemClasses, itemindexes;
            // var _this = this;

            var selectedItem      = null;
            var selectedItemIndex = null;
            var collectionClasses =
                { hasItems:    'mz-c-has-items'
                , hasExpanded: 'mz-c-has-expanded'
                };

            this.isOpen      = false;
            this.itemindexes = {};
            this.items       = [];
            this.itemClasses =
                { $hasOptions:  'mz-ci-has-options'
                , $isSelected:  'mz-ci-selected'
                , $isExpanded:  'mz-ci-expanded'
                , $isFolded:    'mz-ci-folded'
                , $hasIcon:     'mz-ci-has-icon'
                };

            this.selectedIndex = function() { return this.items.indexOf(selectedItem); };

            this.setItemDefaults = function (item) {
                item.$isSelected  = false;
                item.$hasOptions  ||( item.$hasOptions = false );
                item.$isExpanded  ||( item.$isExpanded = false );
                item.$isFolded    ||( item.$isFolded   = true  );
                item.$hasIcon     ||( item.$hasIcon    = true  );
                return item;  };

            this.add = function(item) {
                item = this.setItemDefaults(item);
                this.items[item.$index] = item;  };

            this.remove = function(item) {
                var itemIndex = this.items.indexOf(item);
                if (index === -1) { return; }
                // If the item is currently selected, deselect it.
                if (item.$itemSelected) { this.deselect(item); }
                this.items.splice(itemIndex, 1);  };

            this.select = function(item, shouldEmitEvent) {
                if (item.$index === selectedItemIndex) { return this.deselect(item); }
                var itemIndex;
                if (!item.$id && item.$id !== 0) { return; }
                itemIndex = item.$index;
                if (!_this.items[itemIndex]) {
                    console.error('Unable to find item at index of', sopeIndex);
                    return;  }
                if (selectedItem) { this.deselect(selectedItem); }
                selectedItem = item;
                selectedItemIndex = itemIndex;
                item.$isSelected = true;
                (  item.onSelect || angular.noop  )(); // FIXME: item.onSelect && item.onSelect();
                if (shouldEmitEvent) {
                    $scope.$emit('$mzCollectionItem.change', { type:'item' , itemIndex:itemIndex , item:item });  }
                this.expandItem(item);   };

            this.deselect = function(item) {
                if (item.$isSelected) {
                    selectedItem = selectedItemIndex = null;
                    item.$isSelected = false;
                    item.$isExpanded = false;
                    (  item.onDeselect || angular.noop  )(); // FIXME: item.onSelect && item.onSelect();
                    item.$broadcast && item.$broadcast('$itemDeselected');  }  };

            this.foldItem   = function (item) {};

            this.expandItem = function (item) {};

            this.toggleItemSelected = function() {  this.isOpen = !this.isOpen;  };

            } // end function controller

        ///  @mz-collection  LINK
            function link(scope, element, attrs, ctrl) {
              // ctrl.init(element);
            }

      } // end function mzCollection

    /* @inject */
    function mzCollectionItem($animate, $document) {
        return { restrict:'E' , require:'^mzCollection' , link:link };

        //////     @mz-collection-item  LINK
        function link(scope, element, attrs, api) {
            var $content;
            element.addClass('mz-collection-item');
            // console.log(scope.$id);
            scope.$element = element;
            scope.attrs    = attrs;
            api.add(scope);
            $content = $(element).find('.mz-collection-item-content');
            element.bind('click', toggleItemOpenState);

            scope.onSelect = function() {
                (new TimelineLite())
                    .to(element, 0.2,
                        { ease        : Cubic.easeInOut
                        , marginTop   : '10px'
                        , marginBottom: '10px'
                        , boxShadow   : '0 8px 15px rgba(0,0,0,0.1)'
                        , marginLeft  : '-80'
                        , marginRight : '-80'
                        , width       : '+=160px'
                        }  )
                    .to($content, 0.2,
                        { ease     : Cubic.easeIn
                        , display  : 'block'
                        , maxHeight: '100%'
                        , autoAlpha: 1
                        }, 0.1  )
                    ;  };

            scope.onDeselect = function() {
                TweenMax.to(scope.$element, 0.2,
                    { ease        : Cubic.easeInOut
                    , marginLeft  : '0'
                    , marginRight : '0'
                    , width       : '-=160px'
                    , marginTop   : '0'
                    , marginBottom: '0'
                    }   );
                TweenMax.to($content, 0.2,
                    { ease     : Cubic.easeIn
                    , autoAlpha: 0
                    , maxHeight: '0%'
                    , display  :'none'
                    }   );
                }; // end function scope.onDeselect

            /**
             * toggleItemOpenState
             * Case for whether user selects a link
             * @param  {Object} event Click
             */
            function toggleItemOpenState(event) {
                event.preventDefault();
                scope.$apply(function() {  api.select(scope);  });
                // console.log(api.selectedIndex());
              }

            scope.$on('$destroy', function() {  element.unbind('click', toggleItemOpenState);  });

          }; // end function link

      } // end directive mzCollectionItem

  }).call(this);
