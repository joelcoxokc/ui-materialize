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

        //////
        //////     @mz-collection  CONTROLLER
        //////
        function controller($scope, $animate) {
            var _this, selectedItem, selectedItemIndex, itemHasOptions,
            showItemOptions, itemClasses, collectionClasses, itemindexes;

            selectedItem      = null;
            selectedItemIndex = null;

            _this = this;
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
            collectionClasses =
                { hasItems:    'mz-c-has-items'
                , hasExpanded: 'mz-c-has-expanded'
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
                (  item.onSelect || angular.noop  )();
                if (shouldEmitEvent) {
                    $scope.$emit('$mzCollectionItem.change', { type:'item' , itemIndex:itemIndex , item:item });  }
                this.expandItem(item);   };

            this.deselect = function(item) {
                if (item.$isSelected) {
                    selectedItem = selectedItemIndex = null;
                    item.$isSelected = false;
                    item.$isExpanded = false;
                    (  item.onDeselect || angular.noop  )();
                    item.$broadcast && item.$broadcast('$itemDeselected');  }  };

            this.foldItem   = function (item) {};

            this.expandItem = function (item) {};

            this.toggleItemSelected = function() {  this.isOpen = !this.isOpen;  };

            } // end function controller

        //////
        //////     @mz-collection  LINK
        //////
        function link(scope, element, attrs, ctrl) {
            // ctrl.init(element);
            ///////////////////////////////
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

            ///////////////////////////////

            scope.onSelect = function() {
                var timeline = new TimelineLite();
                timeline
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


;(function() { 'use strict';
    angular
        .module('mz.components.dialog', [])
        .directive('mzDialog', mzDialog)
        ;
    /* @inject */
    function mzDialog() {
      return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzDialog.view.html',
        ////////////////
      function link(scope, element, attrs) {
          ///////////////////////////////

          }
    }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown)
        ;
    /* @inject */
    function mzDropdown() {
      return { restrict: 'E' , scope: true , transclude: true , link:link }; // templateUrl: 'templates/mzDropdown.view.html',
        ////////////////
      function link(scope, element, attrs) {
          ///////////////////////////////
          }  }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.form', [])
        .directive('mzForm', mzForm)
        ;
    /* @inject */
    function mzForm() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzForm.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
            }  }  }).call(this);

;(function() { 'use strict';
    angular.module('ui.materialize.components',
            [ 'mz.components.services'
            , 'mz.components.controllers'
            , 'mz.components.blur'
            , 'mz.components.button'
            , 'mz.components.card'
            , 'mz.components.collapsible'
            , 'mz.components.collection'
            , 'mz.components.dialog'
            , 'mz.components.dropdown'
            , 'mz.components.form'
            , 'mz.components.media'
            , 'mz.components.modal'
            , 'mz.components.notification'
            , 'mz.components.progress'
            , 'mz.components.ripple'
            , 'mz.components.select'
            , 'mz.components.shadow'
            , 'mz.components.tabs'
            , 'mz.components.table'
            , 'mz.components.text-field'
            , 'mz.components.tooltip'
            ]  )
        ;
    }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.media', [])
        .directive('mzMedia', mzMedia)
        ;

    /* @inject */
    function mzMedia() {
        return { restrict:'E' , scope:true , transclude:true , link:link };  // templateUrl: 'templates/mzMedia.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal)
        ;
    /* @inject */
    function mzModal() {
        return { restrict:'E' , scope:true , transclude:true, link:link }; // templateUrl: 'templates/mzModal.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.notification', [])
        .directive('mzNotification', mzNotification)
        ;
    /* @inject */
    function mzNotification() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzNotification.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.progress', [])
        .directive('mzProgress', mzProgress)
        ;
    /* @inject */
    function mzProgress() {
        return { restrict:'E' , scope:true , transclude: true , link:link }; // templateUrl: 'templates/mzProgress.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }

  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.ripple', [])
        .directive('mzRipple', mzRipple)
        ;
    /* @inject */
    function mzRipple() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzRipple.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.select', [])
        .directive('mzSelect', mzSelect)
        ;
    /* @inject */
    function mzSelect() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzSelect.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.shadow', [])
        .directive('mzShadow', mzShadow)
        ;
    /* @inject */
    function mzShadow() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzShadow.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.tab', [])
        .directive('mzTab', mzTab)
        ;
    /* @inject */
    function mzTab() {
        return { template  : '<li class="tab" ><a href="{{link}}" class="pink-text text-accent-1">{{name}}</a></li>'
               , restrict  : 'E'
               , scope     : { link:'@' , name:'@' }
               , transclude: true
               , link      : link
               };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.tab-content', [])
        .directive('mzTabContent', mzTabContent)
        ;
    /* @inject */
    function mzTabContent() {
        return { template  : '<div id="{{target}}" class="mz-tab-content" data-ng-transclude></div>'
               , restrict  : 'E'
               , scope     : { target:'@' }
               , replace   : true
               , transclude: true
               , link      : link
               };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.table', [])
        .directive('mzTable', mzTable)
        ;
    /* @inject */
    function mzTable() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzTable.view.html',
        ////////////////

        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


/* global jQuery:false */
;(function() { 'use strict';
    angular
        .module(  'mz.components.tabs',
            [ 'mz.components.tab'
            , 'mz.components.tab-content'
            ]  )
        .directive('mzTabs', mzTabs)
        ;
    /* @inject */
    function mzTabs() {
        return { template:  '<div class="tabs-wrapper">'+
                              '<div class="row white z-depth-1 pin-top" style="top: 0px;">'+
                                '<div class="container">'+
                                  '<ul class="tabs" data-ng-transclude></ul></div></div></div>'
               , restrict  : 'E'
               , scope     : true
               , transclude: true
               , link      : link
               };
        // <li class="tab" ><a href="#tab1" class="">Typography</a></li>
        // <li class="tab" ><a href="#tab2" class="">Grid</a></li>
        // <li class="tab" ><a href="#tab4" class="active">Forms</a></li>
        // <li class="tab" ><a href="#tab5" class="">Buttons</a></li>
        // <li class="tab" ><a href="#tab6">Navbar</a></li>
        // <li class="tab" ><a href="#tab7">Content</a></li>

        ////////////////

        function link(scope, element, attrs) {
            jQuery(document).ready(function() {
                element.children().ready(function(){$('ul.tabs').tabs();});  });
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.text-field', [])
        .directive('mzTextField', mzTextField)
        ;
    /* @inject */
    function mzTextField() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzTextField.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.tooltip', [])
        .directive('mzTooltip', mzTooltip);

    /* @inject */
    function mzTooltip() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzTooltip.view.html',
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('ui.materialize.core',
            [ 'mz.core.materialize'
            , 'mz.core.controllers'
            , 'mz.core.transclude'
            , 'mz.core.transclude-replace'
            ])
        ;
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.core.materialize', [])
        .directive('mzMaterialize', mzMaterialize)
        .run(mzRunner)
        ;
    function mzRunner($rootScope) { $rootScope.$toggleLeftSideNav = function() {}; }

    /* @inject */
    function mzMaterialize() {
        return { template  : '<div class="mz-materialize" ng-class="classList" data-ng-transclude></div>'
               , restrict  : 'E'
               , replace   : true
               , transclude: true
               , scope     : true
               , controller: 'mzController as mz'
               , link      : link
               };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-materialize');
            $('body').addClass('has-flex');
            $('html').addClass('has-flex');
            scope.classList = {};
            ctrl.init(element); }
            ///////////////////////////////
    } // end function mzMaterailize
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.core.transclude-replace', [])
        .directive('ngTranscludeReplace', ngTranscludeReplace)
        ;
    /* @inject */
    function ngTranscludeReplace() {
        return { terminal:true , restrict:'EA' , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            if (!transclude) {
                $log.error('orphan', 'Illegal use of ngTranscludeReplace directive in the template.'+
                     ' Must have a parent directive that requires transclusion. ');
                return; }
            transclude(function (clone) { clone.length ? $element.replaceWith(clone) : $element.remove(); });
            ///////////////////////////////
          }
      }


}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.core.transclude', [])
        .directive('ngTransclude', ngTransclude)
        .config(transcludeHelper)
        ;
    /* @ngInject */
    function transcludeHelper($provide) {
        $provide.decorator('ngTranscludeDirective',
            [ '$delegate'
            , function ($delegate) { $delegate.shift();  return $delegate; }
            ]   );   }
    /* @inject */
    function ngTransclude() {
        return { restrict:'EAC' , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var iScopeType = attrs.ngTransclude || 'sibling';
            switch (iScopeType) {
                case 'sibling':
                    transclude(function (clone) {  element.empty();  element.append(clone);  });
                    break;
                case 'parent':
                    transclude(scope, function (clone) {  element.empty();  element.append(clone);  });
                    break;
                case 'child':
                    var iChildScope = scope.$new();
                    transclude(iChildScope, function (clone) {
                        element.empty();
                        element.append(clone);
                        element.on('$destroy', iChildScope.$destroy());   });
                    break;
                default:
                    var count = parseInt(iScopeType);
                    if (!isNaN(count)) {
                        var toClone = scope;
                        for (var idx = 0; idx < count; idx++) {
                            if (!toClone.$parent) { break; }
                            toClone = toClone.$parent;   }
                        transclude(toClone, function (clone){ element.empty();  element.append(clone); });  }
                } // end switch construct
            ///////////////////////////////
          }
      }
  }).call(this);

/*
==============================================================================================================
==============================================================================================================
==============================================================================================================
==============================================================================================================
==============================================================================================================
==============================================================================================================
 */







