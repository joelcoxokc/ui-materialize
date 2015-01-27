;(function() { 'use strict';
    angular
        .module('ui.materialize',
            [ 'ngAnimate'
            , 'ui.materialize.core'
            , 'ui.materialize.nav'
            , 'ui.materialize.layout'
            , 'ui.materialize.components'
            ]  )
        ;  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.blur', [])
        .directive('mzBlur', mzBlur)
        ;
    /* @inject */
    function mzBlur() {
        return { restrict:'E' , scope:true , transclude:true , link:link };  // templateUrl: 'templates/mzBlur.view.html',
        function link(scope, element, attrs) {
            ////////////////
            }  }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.button', [])
        .directive('mzButton', mzButton)
        ;
    /* @inject */
    function mzButton() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzButton.view.html',
        function link(scope, element, attrs) {
            ////////////////
            }  }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard)
        ;
    /* @inject */
    function mzCard() {
        return { restrict:'E' , scope:true , transclude:true , link:link }; // templateUrl: 'templates/mzCard.view.html',
        function link(scope, element, attrs) {
            ////////////////
            }  }  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible)
        ;
    /* @inject */
    function mzCollapsible() {
        return { templateUrl:'templates/mzCollapsible.view.html' , restrict:'E' , scope:true , transclude:true , link:link };
        ////////////////

        function link(scope, element, attrs) {
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
            }
        }  }).call(this);


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


;(function() { 'use strict';
    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody)
        ;
    /* @inject */
    function mzBody() {
      return { restrict:'E', require:'^mzMaterialize' , scope:true , transclude:true , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            // scope.$parent.$parent = mzMaterialize $scope
            // scope.$parent.$parent.mz = ctrl
            ctrl.body = element;
            element.addClass('mz-body');
            // console.log('BODY',  scope);
            ///////////////////////////////
            transclude(scope, element.append);

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
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer)
        ;
    /* @inject */
    function mzContainer() {
        return { restrict: 'AC' , require: '^mzMaterialize' , scope:true , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl) {
            element.addClass('container');
            element.addClass('mz-container');
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.layout.flex', [])
        .directive('mzFlex', mzFlex)
        .run(mzRunner)
        ;
    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {};
      }

    /* @inject */
    function mzFlex() {
        return  { template: '<div class="mz-flex" data-ng-transclude></div>'
                , restrict  : 'E'
                , scope     : {}
                , replace   : true
                , transclude: true
                , controller: 'mzNavController as vm'
                , link: link
                };
        ////////////////
        function link(scope, element, attrs, ctrl) {
            var $body;
            ///////////////////////////////
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter)
        ;
    /* @inject */
    function mzFooter() {
        return { templateUrl: 'layout/footer.template.html'
                 // template: '<footer data-ng-class="color" data-ng-transclude></footer>'
               , restrict   : 'E'
               , scope      : { color:'@' }
               , transclude : true
               , replace    : true
               , link       : link
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
            function toggle(param) {}
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.layout.grid', [])
        .directive('mzCol', mzCol)
        ;
    /* @inject */
    function mzCol() {
        return { template: '<div class="col" data-ng-class="ngClasses" data-ng-transclude></div>'
               , restrict: 'EA',
               , scope:{ s:'@' , m:'@' , l:'@' , offset:'@' }
               , transclude: true
               , replace:true
               , link: link
               };
        ////////////////
        function link(scope, element, attrs) {
            scope.ngClasses = {};
            attrs.s && ( scope.ngClasses['s'+attrs.s] = !!attrs.s );
            attrs.m && ( scope.ngClasses['m'+scope.m] = !!scope.m );
            attrs.l && ( scope.ngClasses['l'+scope.m] = !!scope.l );
            attrs.offset && ( scope.ngClasses['offset-'+scope.offset] = !!scope.offset );
            // scope.$apply()
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
        .module('mz.layout.include', [])
        .directive('mzInclude', mzInclude)
        ;
    /* @inject */
    function mzInclude() {
        return { restrict:'E' , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, element.append);
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular.module('ui.materialize.layout',
            [ 'mz.layout.controllers'
            , 'mz.layout.container'
            , 'mz.layout.services'
            , 'mz.layout.include'
            , 'mz.layout.footer'
            , 'mz.layout.body'
            , 'mz.layout.flex'
            , 'mz.layout.grid'
            , 'mz.layout.main'
            , 'mz.layout.view'
            ]  );
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.layout.main', [])
        .directive('mzMain', mzMain)
        ;
    /* @inject */
    function mzMain() {
        return { template  : '<main class="mz-main" data-ng-transclude></main>'
               , restrict  : 'E'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      : link
               };   };
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
        .module('mz.layout.view', [])
        .directive('mzView', mzView)
        ;
    /* @inject */
    function mzView() {
        return { template: '<main class="mz-view"><ui-view class="mz-body col s12"></ui-view></main>'
               , restrict: 'E'
               , scope: true
               , replace:true
               , link: link
               };
        //////////////
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
    angular.module('ui.materialize.nav',
        [ 'mz.nav.services'
        , 'mz.nav.controllers'
        , 'mz.nav.action-group'
        , 'mz.nav.collapsible-group'
        , 'mz.nav.container'
        , 'mz.nav.toggle'
        , 'mz.nav.action'
        , 'mz.nav.footer'
        , 'mz.nav.brand'
        , 'mz.nav.side'
        , 'mz.nav.bar'
        ]  );
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.action-group', [])
        .directive('mzNavActions', mzNavActions)
        .directive('navActionGroup', navActionGroup)
        ;

    ////////////////////
    /// Global Variables
    var globalSides = { top:{} , right:{} , bottom:{} , left:{} };

    /* @ngInject */
    function mzNavActions(){
        return { restrict  : 'E'
               , controller: function(){}
               , scope     : true
               , transclude: true
               , link      : link
               };

        ////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-actions')
            transclude(scope, element.append);   }

      } // end function mzNavActions

    /*
        navActionGroup
    ===================

        @sub-directive  |  <nav-action-group/>
        @parent         |  <mz-nav> || <mz-nav-{right | left}>
        @description    |  Wrap actions into groups based on the side in which the tools belong
        @options        |  <top | right | bottom | left>

        @attributes
            //=====================
            //=====GLOBAL==========
            //  @attr  | links     Add classes to all inner links/ <a> elements
            //
            //============================
            //=== NAV-TOP | NAV-BOTTOM ===
            //
            //  @parent   |   mz-nav   {top || bottom}
            //  @attr     |   side     Action group for either the left or right actions
            //  @usage    |
            //            |   <mz-nav side="top">
            //                    <nav-tools
            //                        side= <left || right>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav>
            //
            //============================
            //=== NAV-RIGHT | NAV-LEFT ===
            //
            // @parent      |  mz-nav   {left || right} || mz-nav-left || mz-nav-right
            // @attr        |  side     Action group for either top or bottom actions
            // @usage       |
            //              | <mz-nav-left>
            //                    <nav-tools
            //                        side= <top || bottom>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav-left>
    ========*/
    /* @ngInject */
    function navActionGroup() {
        return { template  : '<ul id="{{mobile}}" class="side-nav"></ul>'
               , restrict  : 'E'
               , controller: function(){}
               , scope     : true
               , transclude: true
               , link      : link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
          var inner = element.children('ul');
            ///  @scope   childClassList
            ///  @scope   mobile
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');
            element.addClass('nav-action-group');
            ///  @validate   the requested group location
            if (attrs.side) {
                if (globalSides[attrs.side]) { element.addClass('nav-action-group-'+attrs.side); }
                else { console.error('Please specify side="<top | right | bottom |left>" when using nav-action-group'); }  }
            ///  @translucde   Transclude element to the child <ul>
            transclude(scope, inner.append);
            //////     @jQuery   apply jQuery methods when dom is ready;
            jQuery(document).ready(function() {
                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                attrs.links && $(element).find('.linked').addClass(attrs.links);  });
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.action', [])
        .directive('navAction', navAction)
        ;
    /* @ngInject */
    function navAction() {
        return { templateUrl: 'nav/nav-action.template.html'
               , require    : '^navActionGroup'
               , restrict   : 'E'
               , transclude : true
               , replace    : true
               , scope      : true
               , link       : link
               };
        //////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var inner = element.children();
            scope.icon   =  attrs.icon  || null;
            scope.link   =  attrs.link  || null;
            scope.label  =  attrs.label || null;
            scope.waves  = (attrs.waves ? 'waves-effect waves-'+attrs.waves : '');
            transclude(scope, inner.append);   }
    } }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.bar', [])
        .directive('mzNav', mzNav)
        ;
    /* @inject */
    function mzNav($rootScope, $document) {
        return { templateUrl: 'templates/mzNav.template.html'
               , restrict: 'E'
               , require:'^mzMaterialize',
                 // scope:true,
               , scope: { color:'@' , side:'@' , fixed:'@' , brand:'@' , view:'@' , size: '@' }
               , transclude: true
               , link: link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = 'top' || attrs.side;
            scope.side = side
            attrs.fixed && (config.fixed = true); // FIXME: ?? config.fixed = !!attrs.fixed
            attrs.size  && (config[attrs.size] = true);
            ctrl.addNav(side, element, attrs, config, scope);
            transclude(scope, function(clone){ element.find('nav').append(clone); });
          }
      }
  }).call(this);


(function() {
    /*
     *  TEMPLATE mz-nav
     */
    angular
        .module('ui.materialize')
        .run( ["$templateCache", function($templateCache) {
            $templateCache.put('templates/mzNav.template.html',
                  '<nav class="{{color}} mz-nav-container nav-container-top">'+
                    '<mz-nav-brand ng-if="brand" class="">{{brand}}</mz-nav-brand>'+
                    '<div data-ng-if="view" class="mz-nav-container-view" ui-view="{{view}}"></div></nav>'  );
            }])
        ;
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.brand', [])
        .directive('mzNavBrand', mzNavBrand)
        ;
    /*
        mzNavBrand
    ====================

        @sub-directive  |   mz-nav-brand
        @parent         |   mz-nav
        @description    |   directive for adding the logo brand to the top nav...
        @NOTE           |   replaced by an <a></a> element. all basic attributes apply
        @usage          |
                        |   <mz-nav>
                                <mz-nav-brand
                                    ui-sref= <state-name>
                                </mz-nav-brand>
                            </mz-nav>
    ===================*/
    /* @ngInject */
    function mzNavBrand() {
        return { template  : '<a class=""></a>'
               , restrict  : 'E'
               , require   : '^mzMaterialize'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      :link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-brand brand-logo');
            transclude(scope, element.append);  }
      } // end function mzNavBrand
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.collapse', [])
        .directive('navCollapse', navCollapse)
        ;
    function navCollapse() {
        return { template  : '<li><div class="{{waves}} collapsible-header" data-ng-class="childClassList">'+
                               '<span class="nav-action-text">{{header}}</span>'+
                               '<i data-ng-if="icon" class="{{icon}}"></i></div>'+
                               '<div class="collapsible-body" data-ng-class="">'+
                                 '<ul data-ng-transclude></ul></div></li>'
               , restrict  : 'E'
               , require   : '^navCollapsibleGroup'
               , scope     : { header:'@' }
               , replace   : true
               , transclude: true
               , link      : link
               };
        ///////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;
            inner = element.children();
            element.addClass('nav-collapse');
            ///  @scope state  |  set the state for ui-sref if attribute is passed
            ///  @scope link   |  set the link for href if attribute is passed
            ///  @scope waves  |  set waves on scope, or default wave is specified. otherwise no waves used
            scope.state = attrs.state  || null;
            scope.link  = attrs.link   || null;
            scope.icon  = attrs.icon   || null;


            // FIXME: What's the new behavior here?
            attrs.waves &&( scope.waves = 'waves-effect ' );
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {
                scope.waves += 'waves-'+attrs.waves; }
            else {
                scope.waves += 'waves-light'; }

            //////     @transclude  |  transclude the actions
            // transclude(scope, function (clone) {
            //     inner.append(clone);
            // });
          }
      }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.collapsible-group', ['mz.nav.collapse'])
        .directive('navCollapsibleGroup', navCollapsibleGroup)
        ;

    /* @ngInject */
    function navCollapsibleGroup() {
        return {  templateUrl: 'nav/nav-collapsible-group.template.html'
               , restrict   : 'E'
               , scope      : true
               , controller : controller
               , link       : link
               };
        //////////////

        function controller() {}

        function link(scope, element, attrs, ctrl, transclude) {

                var globalSides = {  top:{} , right:{} , bottom:{} , left:{}  };
                var inner = element.children('ul');
                ///  @scope   childClassList
                ///  @scope   mobile
                scope.childClassList = attrs.links;
                attrs.mobile &&( scope.mobile = 'nav-mobile' );
                ///  @class   inner
                ///  @class   element
                inner.addClass('collapsible collapsible-accordion');
                element.addClass('nav-collapsible-group');
                if(attrs.side && globalSides[attrs.side]) {
                    element.addClass('nav-collapsible-group-'+attrs.side); }
                jQuery(document).ready(function() {
                    attrs.links && $(element).find('.linked').addClass(attrs.links);  });
            } // end function link
    } }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.container', [])
        // .directive('mzNavContainer', mzNavContainer);
        // .directive('navContainer', navContainer)
        ;
    function navContainer() {
        return { restrict: 'E'
               , scope   : {side:'@'}
               , link    : function(scope, element, attrs) { console.log(scope.side); }
               };
      }
    // function mzNavContainer() {
    //     return {
    //       restrict: 'E',
    //       scope: {
    //         side:'@'
    //       },
    //       link:link,
    //     };

    //     function link(scope, element, attrs) {
    //       element.addClass('mz-nav-conatainer');
    //         // element.addClass('nav-container-'+attrs.mzNavContainer);
    //     }
    // }
  }).call(this);


// (function() {
//     angular
//         .module('ui.materialize')
//         .run(["$templateCache", function($templateCache) {
//                     // <!-- <a ui-sref="home" class="brand-logo indigo-text waves-effect waves-light"><strong class="pink-text text-accent-1">ui</strong>Materialize</a> -->
//                       // <!-- <li class="waves-effect waves-light"><a class="pink-text" href="">JavaScript</a></li> -->
//             $templateCache.put('templates/mzNavContainer.template.html',
//                 // '<div class="nav-wrapper">'+
//                   '<div mz-container>'+
//                     '<ul id="" class="left side-nav">'+
//                       '<li><a href="#" mz-toggle-nav="right" toggle=\'open\'><i class="mdi-navigation-menu pink-text text-accent-1"></i></a></li>'+
//                     '</ul>'+
//                     '<ul id="" class="right side-nav">'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="gettingStarted">Getting Started</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="grid">Grid</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="components">Components</a></li>'+
//                     '</ul>'+
//                   '</div>'
//                 // '</div>'
//             )
//         }]);
// }).call(this);



;(function() { 'use strict';
    angular
        .module('mz.nav.footer', [])
        .directive('mzNavFooter', mzNavFooter)
        ;
    /* @inject */
    function mzNavFooter($rootScope, $document) {
        return { restrict  : 'E'
               , require   : '^mzMaterialize'          // FIXME: is this a regex?
               , scope     : { color:'@' , side:'@' , fixed:'@' , brand:'@' , view:'@' , size:'@' }
               , transclude: true
               , link      : link
               //, templateUrl: 'templates/mzNav.template.html',
               //, scope:true,
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = attrs.side || 'top'; // FIXME: I reveresed these terms. Is this correct?
            scope.side = side;
            config.fixed = !!attrs.fixed;
            config[attrs.size] = !!attrs.size;
            ctrl.addNav(side, element, attrs, config, scope);
            transclude(scope, function (clone) { element.find('nav').append(clone); });
            transclude(scope, element.find('nav').append); // FIXME: Is this right, or the line above?
            }
        } // end function mzNavFooter
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge)
        // .directive('navSideContainer', navSideContainer)
        ;
    /* @inject */
    function mzNavLeft( $animate) { return new SideNavigation('left'); }
    /* @inject */
    function mzNavRight($animate) { return new SideNavigation('right'); }

    function SideNavigation(side) {
        this.scope       = true;
        this.restrict    = 'E';
        this.transclude  = true;
        this.require     = '^mzMaterialize';
        this.templateUrl = 'nav/nav-side.template.html';
        ////////////////////
        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};
            element.addClass('mz-side-nav');
            ctrl.addNav(side, element, attrs, config, scope);
            scope.settings = { side:side };  };  }

    function mzNavSideHeading() {
        return { scope     : true
               , restrict  : 'EA'
               , transclude: true
               , link      : function link(scope, element, attrs, ctrl, transclude) {
                                 element.addClass('mz-nav-side-heading');
                                 transclude(scope, element.append(clone)); }
               };  }

    function mzNavSideContent() {
        return { scope     : true
                 //, template: '<div class="nav-side-content-wrap" data-ng-transclude></div>',
               , restrict  : 'EA'
               , transclude: true
               , link      : function link(scope, element, attrs, ctrl, transclude) {
                                 element.addClass('mz-nav-side-content');
                                 transclude(scope, element.append);    }
               };   }
          
    function headerActionHuge() {
        return { restrict: 'A'
               , require : '^mzMaterialize'
               //, scope: true,
               , link: function(scope, element, attrs, ctrl) {
                           element.addClass('header-action-huge');
                           ctrl.registerAction('right', 'useLargeAction');
                           // .useLargeAction();
                           }
               };   }
    }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.nav.toggle', [])
        .directive('mzToggleNav', mzToggleNav)
        .directive('mzSideNavToggle', mzSideNavToggle)
        ;
    /* @inject */

    function mzToggleNav() {
         return { restrict: 'A'
                , require : '^mzMaterialize'
                , scope   : { toggle:'@' }
                , link    : function(scope, element, attrs, ctrl) {}
                };   }

    /* @ngInject */

    function mzSideNavToggle() {
        return { restrict: 'A'
               , require : '^mzMaterialize',
               , scope   : { toggle:'@' , icon:'@' , nextIcon:'@' }
               , link    : function(scope, element, attrs, ctrl) {
                             var icon = angular.element('<i>').addClass(' first-icon '+scope.icon); // FIXME: leading space?
                             var nextIcon = angular.element('<i>').addClass(' next-icon '+scope.nextIcon);
                             var side, toggle, toggleLeft, toggleRight, nav;

                             element.addClass('nav-side-toggle');
                             scope.toggleOn = false;
                             element.append(icon);
                             element.append(nextIcon);
                             element.on('click', function(){
                               scope.toggleOn = !scope.toggleOn;
                               // toggleNext(scope.toggleOn); // FIXME: never uses arg
                               element.toggleClass('next');
                               // console.log(scope.nextIcon);
                               ctrl.$navs.right.scope.isOpen = !ctrl.$navs.right.scope.isOpen;
                               ctrl.$navs.right.scope.$apply();
                               console.log(ctrl.$navs.right.scope.isOpen);  });  }
               } // end object literal
          } // end function mzSideNavToggle
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.button', [])
        .controller('mzButtonController', mzButtonController)
        ;
    /* @ngAnotate */
    function mzButtonController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.card', [])
        .controller('mzCardController', mzCardController)
        ;
    /* @ngAnotate */
    function mzCardController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collapsible', [])
        .controller('mzCollapsibleController', mzCollapsibleController)
        ;
    /* @ngAnotate */
    function mzCollapsibleController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collection', [])
        .controller('mzCollectionController', mzCollectionController)
        ;
    /* @ngAnotate */
    function mzCollectionController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dialog', [])
        .controller('mzDialogController', mzDialogController)
        ;
    /* @ngAnotate */
    function mzDialogController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController)
        ;
    /* @ngAnotate */
    function mzDropdownController($scope) {
        var _this = this; // FIXME: Is this some Angular magic, or does _this get immediately discarded
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.form', [])
        .controller('mzFormController', mzFormController)
        ;
    /* @ngAnotate */
    function mzFormController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular.module('mz.components.controllers',
        [ 'mz.components.controllers.button'
        , 'mz.components.controllers.card'
        , 'mz.components.controllers.collapsible'
        , 'mz.components.controllers.collection'
        , 'mz.components.controllers.dialog'
        , 'mz.components.controllers.dropdown'
        , 'mz.components.controllers.form'
        , 'mz.components.controllers.media'
        , 'mz.components.controllers.modal'
        , 'mz.components.controllers.table'
        , 'mz.components.controllers.tabs'
        , 'mz.components.controllers.notification'
        , 'mz.components.controllers.progress'
        , 'mz.components.controllers.select'
        , 'mz.components.controllers.text-field'
        , 'mz.components.controllers.ripple'
        , 'mz.components.controllers.tooltip'
        ]  );
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.media', [])
        .controller('mzMediaController', mzMediaController)
        ;
    /* @ngAnotate */
    function mzMediaController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.modal', [])
        .controller('mzModalController', mzModalController)
        ;
    /* @ngAnotate */
    function mzModalController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.notification', [])
        .controller('mzNotificationController', mzNotificationController);

    /* @ngAnotate */
    function mzNotificationController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.progress', [])
        .controller('mzProgressController', mzProgressController);

    /* @ngAnotate */
    function mzProgressController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.ripple', [])
        .controller('mzRippleController', mzRippleController);

    /* @ngAnotate */
    function mzRippleController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.select', [])
        .controller('mzSelectController', mzSelectController);

    /* @ngAnotate */
    function mzSelectController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.table', [])
        .controller('mzTableController', mzTableController);

    /* @ngAnotate */
    function mzTableController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.tabs', [])
        .controller('mzTabsController', mzTabsController);

    /* @ngAnotate */
    function mzTabsController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.text-field', [])
        .controller('mzTextFieldController', mzTextFieldController);

    /* @ngAnotate */
    function mzTextFieldController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.tooltip', [])
        .controller('mzTooltipController', mzTooltipController);

    /* @ngAnotate */
    function mzTooltipController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.button', [])
        .provider('mzButtonService', mzButtonService);

    /* @ngAnotate */
    function mzButtonService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Buttons() {
                var _this;

                _this = this;

            }

            Buttons.prototype.enable = function() {};

            return $injector.instantiate(Buttons);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.card', [])
        .provider('mzCardService', mzCardService);

    /* @ngAnotate */
    function mzCardService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Card() {
                var _this;

                _this = this;

            }

            Card.prototype.enable = function() {};

            return $injector.instantiate(Card);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.collapsible', [])
        .provider('mzCollapsibleService', mzCollapsibleService);

    /* @ngAnotate */
    function mzCollapsibleService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Collapsible() {
                var _this;

                _this = this;

            }

            Collapsible.prototype.enable = function() {};

            return $injector.instantiate(Collapsible);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.collection', [])
        .provider('mzCollectionService', mzCollectionService);

    /* @ngAnotate */
    function mzCollectionService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Collection() {
                var _this;

                _this = this;

            }

            Collection.prototype.enable = function() {};

            return $injector.instantiate(Collection);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.dialog', [])
        .provider('mzDialogService', mzDialogService);

    /* @ngAnotate */
    function mzDialogService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Dialog() {
                var _this;

                _this = this;

            }

            Dialog.prototype.enable = function() {};

            return $injector.instantiate(Dialog);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.dropdown', [])
        .provider('mzDropdownService', mzDropdownService);

    /* @ngAnotate */
    function mzDropdownService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Dropdown() {
                var _this;

                _this = this;

            }

            Dropdown.prototype.enable = function() {};

            return $injector.instantiate(Dropdown);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.form', [])
        .provider('mzFormService', mzFormService);

    /* @ngAnotate */
    function mzFormService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Form() {
                var _this;

                _this = this;

            }

            Form.prototype.enable = function() {};

            return $injector.instantiate(Form);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services', [
            'mz.components.services.button',
            'mz.components.services.card',
            'mz.components.services.collapsible',
            'mz.components.services.collection',
            'mz.components.services.dialog',
            'mz.components.services.dropdown',
            'mz.components.services.form',
            'mz.components.services.media',
            'mz.components.services.modal',
            'mz.components.services.table',
            'mz.components.services.tabs',
            'mz.components.services.notification',
            'mz.components.services.progress',
            'mz.components.services.select',
            'mz.components.services.text-field',
            'mz.components.services.ripple',
            'mz.components.services.tooltip',
        ]);

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.services.media', [])
        .provider('mzMediaService', mzMediaService);

    /* @ngAnotate */
    function mzMediaService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Media() {
                var _this;

                _this = this;

            }

            Media.prototype.enable = function() {};

            return $injector.instantiate(Media);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.modal', [])
        .provider('mzModalService', mzModalService);

    /* @ngAnotate */
    function mzModalService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Modal() {
                var _this;

                _this = this;

            }

            Modal.prototype.enable = function() {};

            return $injector.instantiate(Modal);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.notification', [])
        .provider('mzNotificationService', mzNotificationService);

    /* @ngAnotate */
    function mzNotificationService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Notifications() {
                var _this;

                _this = this;

            }

            Notifications.prototype.enable = function() {};

            return $injector.instantiate(Notifications);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.progress', [])
        .provider('mzProgressService', mzProgressService);

    /* @ngAnotate */
    function mzProgressService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Progress() {
                var _this;

                _this = this;

            }

            Progress.prototype.enable = function() {};

            return $injector.instantiate(Progress);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.ripple', [])
        .provider('mzRippleService', mzRippleService);

    /* @ngAnotate */
    function mzRippleService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Ripple() {
                var _this;

                _this = this;

            }

            Ripple.prototype.enable = function() {};

            return $injector.instantiate(Ripple);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.select', [])
        .provider('mzSelectService', mzSelectService);

    /* @ngAnotate */
    function mzSelectService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Select() {
                var _this;

                _this = this;

            }

            Select.prototype.enable = function() {};

            return $injector.instantiate(Select);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.table', [])
        .provider('mzTableService', mzTableService);

    /* @ngAnotate */
    function mzTableService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Table() {
                var _this;

                _this = this;

            }

            Table.prototype.enable = function() {};

            return $injector.instantiate(Table);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.tabs', [])
        .provider('mzTabsService', mzTabsService);

    /* @ngAnotate */
    function mzTabsService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Tabs() {
                var _this;

                _this = this;

            }

            Tabs.prototype.enable = function() {};

            return $injector.instantiate(Tabs);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.text-field', [])
        .provider('mzTextFieldService', mzTextFieldService);

    /* @ngAnotate */
    function mzTextFieldService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function TextField() {
                var _this;

                _this = this;

            }

            TextField.prototype.enable = function() {};

            return $injector.instantiate(TextField);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.tooltip', [])
        .provider('mzTooltipService', mzTooltipService);

    /* @ngAnotate */
    function mzTooltipService() {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };


        this.$get = function($injector) {

            function Tooltip() {
                var _this;

                _this = this;

            }

            Tooltip.prototype.enable = function() {};

            return $injector.instantiate(Tooltip);
        }
    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController);

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $NavBarService, mzNavApi, $rootScope) {
        // $scope.mzNav = mzNavApi;
        var _this = this;

        this.$navs = {};
        this.$settings = {
            top:   {},
            bottom:{},
            right:{
                actions:[]
            },
            left:{},
        };
        console.log(mzNavApi);



        this.init = function(element) {
            this.element = element;

        };

        this.addNav = function(side, element, attrs, config, scope) {
            var NavService = useService(side);
            this.$navs[side] = new NavService(side, element, attrs, config, scope);
            this.$navs[side].activate();
            this.invokeRegistry(side);




            $rootScope.$on('$stateChangeStart', function (event, state) {

                // if (mzNavApi.config.navBar.hideOn[state.name]) {
                //     element.addClass('hidden');
                // } else {
                //     element.removeClass('hidden');
                // }
            });
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
                top:   $NavBarService
            };
            return services[service];
        }

    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.controllers', [
            'mz.core.ctrl'
        ]);

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.controllers', []);

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.services', []);

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.controllers', [
            'mz.nav.controllers.nav'
        ]);


}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.controllers.nav', [])
        .controller('mzNavController', mzNavController);

    /* @ngInject */
    function mzNavController($scope) {


        var _this, classNames;
        _this = this;


        $scope.$watch(function ( value ) {
            // console.log(value)
        })
    }

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.services', [
            'mz.nav.services.api',
            'mz.nav.services.nav',
            'mz.nav.services.left',
            'mz.nav.services.right',
            'mz.nav.services.bar',
            'mz.nav.services.footer'
        ]);

}).call(this);
;(function(){

    'use strict';
    angular
        .module('mz.nav.services.api', [])
        .provider('mzNavApi', mzNavApi)
        .config(decorate);

    var required, navs, app;

    /* @ngInject */
    function mzNavApi(){

        var _this    = this;

        function defaultConfig(){
            this.hideOn = {};
            this.showOn = {};
        }

        this.config = {
            navBar: new defaultConfig(),
            left:   new defaultConfig(),
            right:  new defaultConfig(),
            footer: new defaultConfig()
        };
        this.hideOn = function(navType, state) {
            if(!this.config[navType]) {
                console.error('Nav type does not exist');
            }
            this.config[navType].hideOn[state] = true;
        };

         /////
        //////////////////////////////
        //////////////////////////////////////////////////////
        this.$get = function($injector) {

            function Nav($NavService){
                _.assign(this, _this.config);
                this.config = _this.config;
            };

            Nav.prototype.Nav = Nav;
            Nav.prototype.enable = function(scope) {};

            return $injector.instantiate(Nav);
            // return Nav
        }
        //////////////////////////////////////////////////////
        //////////////////////////////

    }

    /* @ngInject */
    function decorate($provide) {

        $provide.decorator('mzNavApi', function ($delegate, $controller, $NavBarService){

                // $NavBarService.hideOn = $delegate.config.navBar.hideOn;
            return $delegate;
        });
    }////////////////////////////////////


}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.services.bar', [])
        .service('$NavBarService', NavBarService);

    /* @ngInject */
    function NavBarService($NavService, $rootScope) {
        var NavBar, defaults;


        NavBar = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var _this = this;
            this.hideOn = {};
        };

        NavBar.prototype = _.create($NavService.prototype, {'constructor':NavBar})

        ////////////////////////
        ///
        ///
        NavBar.prototype.activate = function() {
            this.resetClassList();
            // this.onOpen = this.addEventListener('open', this.open);
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.expand = function(value, classList) {
            console.log(this)
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.collapse = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.hide = function(value, classList) {
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.show = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':unfold');
        };

        NavBar.prototype.watchStates = function(state) {
            var _this = this;

        };

        NavBar.prototype.$delegateStates = function(config) {
            var _this = this;
            _.forEach(config.hideOn, function (state) {
                _this.hideOn[state] = true;
            });
            console.log(this.hideOn);
            this.watchStates();
        }

        return NavBar;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.footer', [])
        .service('$FooterNavService', $FooterNavService);

    /* @ngInject */
    function $FooterNavService(){

        this.activate = function(scope) {
            this.scope = scope;

        };
        this.watch = function() {
            // this.scope.$watchCollection('open', function() {

            // });
        }
    }

}).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.services.left', [])
        .service('$LeftNavigationService', $LeftNavigationService);

    /* @ngInject */
    function $LeftNavigationService(){

        var that_ = this;
        return function Left() {

            this.activate = function(scope, element, attrs) {
                this.scope   = scope;
                this.attrs   = attrs;
                this.element = element;
                this.side    = 'left';

                this.classList = 'nav-left';

                this.scope.isOpen   = attrs.open  || true;
                this.scope.isFixed  = attrs.fixed || false;
                this.scope.isFolded = attrs.fold  || true;

                this.watch('isOpen',   this.open, this.close, 'open');
                this.watch('isFixed',  this.fix,  this.unfix, 'fixed');
                this.watch('isFolded', this.fold, this.unfold, 'fold');
            };

            this.fix = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':fixed');
            };

            this.unfix = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':unfixed');
            };

            this.open = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':opened');
            };

            this.close = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':closed');
            };

            this.fold = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':folded');
            };

            this.unfold = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':unfold');
            };

            this.watch = function(key, succes, fail, classList) {

                this.scope.$watch(key, function(value) {
                    if (key) {
                        succes(value, useClass(classList));
                    } else {
                        fail(value, useClass(classList));
                    }
                });
            };
            this.broadcast = function(msg, data) {
                this.scope.$broadcast(msg, data);
            };
            this.emit = function(msg, data) {
                this.scope.$emit(msg, data);
            };
        }
        //////////////////////////

        function useClass(value) {
            return that_.classList + '-' +value;
        }


    }

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', RightNavigationService);


    /* @ngInject */
    function RightNavigationService($NavService) {
        var RightNavigation, defaults;

        RightNavigation.prototype = _.create($NavService.prototype, {'constructor':RightNavigation});
        RightNavigation.prototype.activate       = protoActivate;
        RightNavigation.prototype.open           = protoOpen;
        RightNavigation.prototype.close          = protoClose;
        RightNavigation.prototype.fold           = protoFold;
        RightNavigation.prototype.unfold         = protoUnfold;
        RightNavigation.prototype.startWatch     = protoStartWatch;
        RightNavigation.prototype.useLargeAction = protoUseLargeAction;

        return RightNavigation;

        function RightNavigation(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;
        };

        function protoActivate() {
            // this.resetClassList();
            var _this = this;
            this.startWatch();
            _.forEach(this.classes, function (className) {
                _this.element.addClass(className)
            });
        };

        function protoOpen() {

            this.element.addClass(this.classes.open);
            if (this.config.fold) {
                this.unfold()
            }
            this.broadcast('nav:'+this.side+':opened');
        };

        function protoClose() {
            this.element.removeClass(this.classes.open);
            if (this.config.fold) {
                this.fold();
            }
            this.broadcast('nav:'+this.side+':closed');
        };

        function protoFold() {
            this.element.addClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':folded');
        };

        function protoUnfold(value, classList) {
            this.element.removeClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':unfold');
        };

        function protoStartWatch(value, classList) {
            this.watch('isOpen', function (value) {
                // console.log('test');
                if (value) {
                    this.open();
                } else {
                    this.close();
                }
            });
        };

        function protoUseLargeAction() {
            this.element.addClass('has-large-action');
        }



        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.nav', [])
        .service('$NavService', NavService);

    /* @ngInject */
    function NavService() {
        var Navigation, defaults, services, sideDeligate;


        Navigation.prototype.broadcast = protoBroadcast;
        Navigation.prototype.emit      = protoEmit;
        Navigation.prototype.fix       = protoFix;
        Navigation.prototype.unfix     = protoUnfix;
        Navigation.prototype.watch     = protoWatch;


        function Navigation(side, element, attrs, config, scope) { config=config||{};

            var _this = this;


            this.side      = side;
            this.attrs     = attrs;
            this.element   = element;
            this.defaults  = {};
            this.config    = {};

            this.classes   = {};
            this.scope     = scope;

            this.class     = 'nav-'+side;

            this.defaults  = getDefaults(this.side);
            this.config    = this.defaults;

            this.resetConfig     = resetConfig;
            this.resetClassList  = resetClassList;
            this.createClassList = createClassList;

            _.assign(this.config, config);
            _.assign(this.scope, createScope(this.config));

            this.resetClassList(this.config);
            this.element.addClass(this.class);


            /// Privledged Methods

            function resetConfig() {
                _.assign(this.scope, createScope(this.config))
                this.classes  = resetClassList(this.config);  };

            function resetClassList() { _.forEach(this.config, this.createClassList); }

            /// Private Methods

            function createClassList(isDefault, classEnding) {
                var className = _this.class+'-'+classEnding;
                _this.classes[classEnding] = className;
                // isDefault ? _this.addClass(className) : _this.removeClass(className);
            }

          }; // end function Navigation

        function protoBroadcast(msg, data)    { this.scope.$broadcast(msg, data);  };

        function protoEmit(msg, data)         { this.scope.$emit(msg, data); };

        function protoFix(value, classList)   { this.element.addClass(classList);
                                                this.broadcast('nav:'+this.side+':fixed');    };

        function protoUnfix(value, classList) { this.element.removeClass(classList);
                                                this.broadcast('nav:'+this.side+':unfixed');   };

        function protoWatch(key, callback) {
            var _this = this;
            this.scope.$watch(key, function() { callback.apply(_this, arguments); }); };


        return Navigation;

        /////////////////////

        function getDefaults(defaultSide){
            return ({
                right: { open:false , fixed:true , fold:true , front:true }     ,
                top:   { hide:false , fixed:true , expand:false , medium:true }  }
                )[defaultSide]; };

        function createScope(configuration) {
            var diffs = { expand:'expanded' , hide:'hidden' };

            var scope = {};
            _.forEach(configuration, function(value, key){
                scope[createDefault(diffs[key] || key)] = value; });
            return scope;  };

        function createDefault(string) {
            return 'is' + string.charAt(0).toUpperCase() + string.slice(1); }


        } // end function NavService

    }).call(this);
