;(function() { 'use strict';
    angular.module('ui.materialize',
        [ 'ngAnimate'
        , 'ui.materialize.core'
        , 'ui.materialize.nav'
        , 'ui.materialize.layout'
        , 'ui.materialize.components'
        ]  );

    }).call(this);

// ;(function() { 'use strict';
//     angular
//         .module('mz.components.collection', [])
//         .directive('mzCollection', mzCollection)
//         .directive('mzCollectionItem', mzCollectionItem)
//         // .service('mzCollectionItemService', mzCollectionItemService)
//         // .controller('mzCollectionController', mzCollectionController)
//         ;

//     /* @inject */
//     function mzCollection() {
//         return { scope:{} , restrict: 'E' , controller: controller , link:link };
//         // template: '<section class="mz-collection" data-ng-transclude></section>', scope:true, replace:true, transclude:true,

//         ///  @mz-collection  CONTROLLER
//         function controller($scope, $animate) {
//             // var itemHasOptions,  showItemOptions, itemClasses, itemindexes;
//             // var _this = this;

//             var selectedItem      = null;
//             var selectedItemIndex = null;
//             var collectionClasses =
//                 { hasItems:    'mz-c-has-items'
//                 , hasExpanded: 'mz-c-has-expanded'
//                 };

//             this.isOpen      = false;
//             this.itemindexes = {};
//             this.items       = [];
//             this.itemClasses =
//                 { $hasOptions:  'mz-ci-has-options'
//                 , $isSelected:  'mz-ci-selected'
//                 , $isExpanded:  'mz-ci-expanded'
//                 , $isFolded:    'mz-ci-folded'
//                 , $hasIcon:     'mz-ci-has-icon'
//                 };

//             this.selectedIndex = function() { return this.items.indexOf(selectedItem); };

//             this.setItemDefaults = function (item) {
//                 item.$isSelected  = false;
//                 item.$hasOptions  ||( item.$hasOptions = false );
//                 item.$isExpanded  ||( item.$isExpanded = false );
//                 item.$isFolded    ||( item.$isFolded   = true  );
//                 item.$hasIcon     ||( item.$hasIcon    = true  );
//                 return item;  };

//             this.add = function(item) {
//                 item = this.setItemDefaults(item);
//                 this.items[item.$index] = item;  };

//             this.remove = function(item) {
//                 var itemIndex = this.items.indexOf(item);
//                 if (index === -1) { return; }
//                 // If the item is currently selected, deselect it.
//                 if (item.$itemSelected) { this.deselect(item); }
//                 this.items.splice(itemIndex, 1);  };

//             this.select = function(item, shouldEmitEvent) {
//                 if (item.$index === selectedItemIndex) { return this.deselect(item); }
//                 var itemIndex;
//                 if (!item.$id && item.$id !== 0) { return; }
//                 itemIndex = item.$index;
//                 if (!_this.items[itemIndex]) {
//                     console.error('Unable to find item at index of', sopeIndex);
//                     return;  }
//                 if (selectedItem) { this.deselect(selectedItem); }
//                 selectedItem = item;
//                 selectedItemIndex = itemIndex;
//                 item.$isSelected = true;
//                 (  item.onSelect || angular.noop  )(); // FIXME: item.onSelect && item.onSelect();
//                 if (shouldEmitEvent) {
//                     $scope.$emit('$mzCollectionItem.change', { type:'item' , itemIndex:itemIndex , item:item });  }
//                 this.expandItem(item);   };

//             this.deselect = function(item) {
//                 if (item.$isSelected) {
//                     selectedItem = selectedItemIndex = null;
//                     item.$isSelected = false;
//                     item.$isExpanded = false;
//                     (  item.onDeselect || angular.noop  )(); // FIXME: item.onSelect && item.onSelect();
//                     item.$broadcast && item.$broadcast('$itemDeselected');  }  };

//             this.foldItem   = function (item) {};

//             this.expandItem = function (item) {};

//             this.toggleItemSelected = function() {  this.isOpen = !this.isOpen;  };

//             } // end function controller

//         ///  @mz-collection  LINK
//             function link(scope, element, attrs, ctrl) {
//               // ctrl.init(element);
//             }

//       } // end function mzCollection

//     /* @inject */
//     function mzCollectionItem($animate, $document) {
//         return { restrict:'E' , require:'^mzCollection' , link:link };

//         //////     @mz-collection-item  LINK
//         function link(scope, element, attrs, api) {
//             var $content;
//             element.addClass('mz-collection-item');
//             // console.log(scope.$id);
//             scope.$element = element;
//             scope.attrs    = attrs;
//             api.add(scope);
//             $content = $(element).find('.mz-collection-item-content');
//             element.bind('click', toggleItemOpenState);

//             scope.onSelect = function() {
//                 (new TimelineLite())
//                     .to(element, 0.2,
//                         { ease        : Cubic.easeInOut
//                         , marginTop   : '10px'
//                         , marginBottom: '10px'
//                         , boxShadow   : '0 8px 15px rgba(0,0,0,0.1)'
//                         , marginLeft  : '-80'
//                         , marginRight : '-80'
//                         , width       : '+=160px'
//                         }  )
//                     .to($content, 0.2,
//                         { ease     : Cubic.easeIn
//                         , display  : 'block'
//                         , maxHeight: '100%'
//                         , autoAlpha: 1
//                         }, 0.1  )
//                     ;  };

//             scope.onDeselect = function() {
//                 TweenMax.to(scope.$element, 0.2,
//                     { ease        : Cubic.easeInOut
//                     , marginLeft  : '0'
//                     , marginRight : '0'
//                     , width       : '-=160px'
//                     , marginTop   : '0'
//                     , marginBottom: '0'
//                     }   );
//                 TweenMax.to($content, 0.2,
//                     { ease     : Cubic.easeIn
//                     , autoAlpha: 0
//                     , maxHeight: '0%'
//                     , display  :'none'
//                     }   );
//                 }; // end function scope.onDeselect

//             /**
//              * toggleItemOpenState
//              * Case for whether user selects a link
//              * @param  {Object} event Click
//              */
//             function toggleItemOpenState(event) {
//                 event.preventDefault();
//                 scope.$apply(function() {  api.select(scope);  });
//                 // console.log(api.selectedIndex());
//               }

//             scope.$on('$destroy', function() {  element.unbind('click', toggleItemOpenState);  });

//           }; // end function link

//       } // end directive mzCollectionItem

//   }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.action-btn', [])
        .directive('mzActionBtn', mzActionBtn)
        // .directive('actionBtn', actionBtn)
        .directive('actionList', actionList)
        ;

    /* @inject */
    function mzActionBtn() {
        return  { templateUrl   : 'components/action-btn.html'
                , restrict   : 'E'
                , replace    : true
                , transclude : true
                , controller : function(){}
                , scope      : {viz: '@', type:'@', size: '@', icon:'@', nextIcon: '@',btnBg:'@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.viz &&( element.addClass('action-btn-'+scope.viz) )
            ctrl.viz = scope.viz
            var btn = angular.element(element.children('a'));

            // btn.addClass('btn-'+scope.size)


            scope.oldIcon = attrs.icon;

            transclude(scope, function (clone) {element.append(clone); });
          }
      }

    // /* @inject */
    // function actionBtn() {
    //     return  { template   : ''
    //             , restrict   : 'E'
    //             , replace    : true
    //             , transclude : true
    //             , scope      : {icon:'@', nextIcon: '@', type:'@', size: '@'}
    //             , link       : link
    //             };
    //     function link(scope, element, attrs, ctrl, transclude) {
    //         scope.type &&( element.addClass('btn-'+scope.type) )
    //         scope.size &&( element.addClass('btn-'+scope.size) )
    //         scope.oldIcon = attrs.icon;

    //         transclude(scope, function (clone) {element.append(clone); });

    //       }
    //   }

    /* @inject */
    function actionList() {
        return  { templateUrl   : 'components/action-list.html'
                , restrict   : 'E'
                , require    : '^mzActionBtn'
                , replace    : true
                , transclude : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            var child = element.children()
            child = angular.element(child);
            var length = child.children().length

            angular.forEach(child.children(), function (item, index){
                item = angular.element(item);

                if(ctrl.viz === 'top') {
                    item.addClass('btn-position-'+(length - index));
                }
                if(ctrl.viz === 'left') {
                    item.addClass('btn-position-'+(length - index));
                }
                if(ctrl.viz === 'bottom') {
                    item.addClass('btn-position-'+ (index+1));
                }
                if(ctrl.viz === 'right') {
                    item.addClass('btn-position-'+ (index+1));
                }
            })

          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.blur', [])
        .directive('mzBlur', mzBlur)
        ;

    /* @inject */
    function mzBlur() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzBlur.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.button', [])
        .directive('mzBtn', mzBtn)
        ;

    /* @inject */
    function mzBtn() {
        return  { template   : '<a class="btn mz-btn"><i data-ng-if="icon" data-ng-class="icon"></i></a>'
                , restrict   : 'E'
                , replace    : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                , transclude : true
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.type &&( element.addClass('btn-'+scope.type) )
            scope.size &&( element.addClass('btn-'+scope.size) )

            transclude(scope, function (clone) {element.append(clone); });

          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard)
        .directive('cardTitle', cardTitle)
        .directive('cardContent', cardContent)
        .directive('cardImage', cardImage)
        .directive('cardReveal', cardReveal)
        .directive('cardAction', cardAction)
        ;

    /* @inject */
    function mzCard() {
        return  { templateUrl: 'components/card.template.html'
                , restrict   : 'E'
                , scope      : true
                , link       : link
                , replace    : true
                , transclude : true
                };
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-card');
            attrs.size && element.addClass(attrs.size);

            (attrs.type === 'panel') && isPanel();

            transclude(scope, function (clone) {element.append(clone)})

            function isPanel() {
                element.removeClass('card');
                element.addClass('card-panel');
              }
          }
      }

      /* @ngInject */
      function cardContent() {
          return  { template   : '<div class="card-content" data-ng-transclude></div>'
                  , link       : link
                  , scope      : true
                  , restrict   : 'EA'
                  , replace    : true
                  , transclude : true
                  };
          function link(scope, element, attrs, ctrl, transclude) {
              element.addClass('mz-card-content');
              if (attrs.title) {
                var title = angular.element('<span>').addClass('card-title').text(attrs.title);
                element.append(title); }
            }
        }

      /* @ngInject */
      function cardTitle() {

          return { template   : '<span class="card-title" data-ng-transclude></span>'
                 , link       : link
                 , scope      : true
                 , replace    : true
                 , restrict   : 'EA'
                 , transclude : true
                 };
          function link(scope, element, attrs, ctrl, transclude) {}
        }

      /* @ngInject */
      function cardImage() {

          return { template   : '<div class="card-image" data-ng-transclude></div>'
                 , link       : link
                 , scope      : true
                 , replace    : true
                 , restrict   : 'EA'
                 , transclude : true
                 };
          function link(scope, element, attrs, ctrl, transclude) {}
        }

       /* @ngInject */
      function cardReveal() {

          return { template   : '<div class="card-reveal" data-ng-transclude></div>'
                 , link       : link
                 , scope      : true
                 , replace    : true
                 , restrict   : 'EA'
                 , transclude : true
                 };
          function link(scope, element, attrs, ctrl, transclude) {}
        }

      /* @ngInject */
      function cardAction() {
          return  { template   : '<div class="card-action" data-ng-transclude></div>'
                  , link       : link
                  , scope      : true
                  , replace    : true
                  , restrict   : 'EA'
                  , transclude : true
                  };
          function link(scope, element, attrs, ctrl, transclude) { var waves = false; } // FIXME: This apparently does nothing.
        }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible)
        .directive('collapseHeader', collapseHeader)
        .directive('collapseBody', collapseBody)
        ;

    /* @inject */
    function mzCollapsible() {
        return  { templateUrl : 'components/collapsible.html'
                , restrict    : 'E'
                , scope       : {type:'@'}
                , transclude  : true
                , replace     : true
                , link        : link
                };
        function link(scope, element, attrs) {
            scope.type ||( scope.type = 'accordion' );
            $(element).collapsible();
          }
      }

    function collapseHeader() {
        return function link(scope, element, attrs) { element.addClass('collapsible-header'); }   }

    function collapseBody() {
        return function link(scope, element, attrs) { element.addClass('collapsible-body'  ); }   }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.collection', [])
        .directive('mzCollection', mzCollection)
        .directive('collectionItem', collectionItem)
        .directive('collectionLink', collectionLink)
        .directive('collectionHeader', collectionHeader)
        .directive('itemSecondary', itemSecondary)
        ;

    /* @inject */
    function mzCollection() {
        return  { templateUrl : 'components/collection.html'
                , scope      : {}
                , restrict   : 'E'
                , controller : controller
                , replace    : true
                , transclude : true
                , link       : link
                };

        function controller($scope) {}

        function link(scope, element, attrs, ctrl) {}

      } // end function mzCollection

    /* @inject */
    function collectionItem($animate, $document) {
        return  { templateUrl : 'components/collection-item.html'
                , require     :'^mzCollection'
                , restrict    :'E'
                , replace     : true
                , transclude  : true
                , link        :link
                };

        /////////////

        function link(scope, element, attrs, api) {};

      }


    /* @inject */
    function collectionLink() {
        return  { template    : '<a class="collection-item" data-ng-transclude></a>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {
            attrs.active &&(element.addClass('active'))
          };

      }

    /* @inject */
    function collectionHeader() {
        return  { template    : '<div class="collection-header" data-ng-transclude></div>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {};

      }
    /* @inject */
    function itemSecondary() {
        return  { template    : '<a class="secondary-content" data-ng-transclude></a>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {

            if(attrs.icon) {
                var icon = angular.element('<i class="'+attrs.icon+'"></i>')
                element.append(icon);
              }
          };

      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.dialog', [])
        .directive('mzDialog', mzDialog)
        ;

    /* @inject */
    function mzDialog() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzDialog.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown)
        ;

    /* @inject */
    function mzDropdown() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzDropdown.view.html',
      }

  }).call(this);

;(function() {'use-strict';
    angular
      .module('mz.components.flow-text', [])
      .directive('flowText', flowText)
      ;

    function flowText() {
        return function (scope, element, attrs) { element.addClass('flow-text'); };
      }

  }).call(this)

;(function() { 'use strict';
    angular
        .module('mz.components.form', [])
        .directive('mzForm', mzForm)
        ;

    /* @inject */
    function mzForm() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzForm.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular.module('ui.materialize.components',
            [ 'mz.components.services'
            , 'mz.components.controllers'
            , 'mz.components.blur'
            , 'mz.components.button'
            , 'mz.components.action-btn'
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
            , 'mz.components.flow-text'
            ]  );

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.media', [])
        .directive('mzMedia', mzMedia)
        ;

    /* @inject */
    function mzMedia() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzMedia.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal)
        ;

    /* @inject */
    function mzModal() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzModal.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.notification', [])
        .directive('mzNotification', mzNotification)
        ;

    /* @inject */
    function mzNotification() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzNotification.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.progress', [])
        .directive('mzProgress', mzProgress)
        ;

    /* @inject */
    function mzProgress() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzProgress.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.ripple', [])
        .directive('mzRipple', mzRipple)
        ;

    /* @inject */
    function mzRipple() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzRipple.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.select', [])
        .directive('mzSelect', mzSelect)
        ;

    /* @inject */
    function mzSelect() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzSelect.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.shadow', [])
        .directive('mzShadow', mzShadow)
        ;

    /* @inject */
    function mzShadow() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzShadow.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.tab', [])
        .directive('mzTab', mzTab)
        .directive('tabItem', tabItem)
        ;

    /* @inject */
    function mzTab() {
        return  { templateUrl  : 'components/tab.html'
                , restrict     : 'E'
                , scope        : true
                , replace      : true
                , transclude   : true
                , controller   : controller
                , link         : link
                };
        function controller($TabsService) {
            this.service = $TabsService;
            this.init = function(element, attrs) { this.service.linkTab(element, attrs.id) };
          }
        function link(scope, element, attrs, ctrl) { ctrl.init(element, attrs); }
      }

    /* @inject */
    function tabItem() {
          return  { templateUrl  : 'components/tab-item.html'
                  , require      : '^mzTabs'
                  , restrict     : 'E'
                  , scope        : {toggle:'@', active:'@'}
                  , replace      : true
                  , transclude   : true
                  , link         : link
                  };
          function link(scope, element, attrs, ctrl) {
              element = $(element)
              ctrl.addTab(element, attrs, scope);
              scope.$watch('active', function(value) { value ? active() : deActivate(); });
              function active()     { element.addClass(   'active'); }
              function deActivate() { element.removeClass('active'); }
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
        return  { template   : '<div id="{{target}}" class="mz-tab-content" data-ng-transclude></div>'
                , restrict   : 'E'
                , scope      : { target:'@' }
                , replace    : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.table', [])
        .directive('mzTable', mzTable)
        ;

    /* @inject */
    function mzTable() {
        return  { template   : '<table class="mz-table" data-ng-transclude></table>'
                , restrict   : 'E'
                , scope      : true
                , replace    : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzTable.view.html',
      }

  }).call(this);

/* global jQuery:false */
;(function() { 'use strict';
    angular
        .module('mz.components.tabs', [ 'mz.components.tab' , 'mz.components.tab-content' ])
        .directive('mzTabs', mzTabs)
        .controller('tabsController', tabsController)
        .service('$TabsService', TabsService)
        ;

    function TabsService() {
        var _this = this;
        this.tabLength  = 0;
        this.indicator = $('<div class="indicator"></div>');
        this.tabItems  = {};
        this.linkTab = function(element, id) { this.tabItems[id].tab = element; }
      }

    /* @ngInject */
    function tabsController($scope, $TabsService) {
        var _this = this;
        angular.extend(this, $TabsService)
        this.init = function(element, attrs) {
            this.element = element;
            this.attrs   = attrs;
            this.element.append(this.indicator);
          }

        this.addTab  = function(element, attrs, scope) {
            this.tabLength++;
            this.tabItems[attrs.toggle] = {element:element, attrs:attrs, scope:scope};
            this.setWidth();
            this.tabItems[attrs.toggle].element.on('click', function() {
                $('.mz-tab').removeClass('active');
                _this.tabItems[attrs.toggle].tab.toggleClass('active')
              });
          }

        this.setWidth = function() {
            this.tabWidth = Math.floor(100 / this.tabLength) + '%'
            angular.forEach(  this.tabItems, function(item) { item.element.css({width:_this.tabWidth}); }  );
          };

      } // end function tabsController

    /* @inject */
    function mzTabs() {
        return  { templateUrl  : 'components/tabs.html'
                , restrict     : 'E'
                , scope        : true
                , replace      : true
                , transclude   : true
                , controller   : 'tabsController as vm'
                , link         : link
                };
        function link(scope, element, attrs, ctrl) { ctrl.init(element.find('ul'), attrs); };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.text-field', [])
        .directive('mzTextField', mzTextField)
        ;

    /* @inject */
    function mzTextField() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzTextField.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.tooltip', [])
        .directive('mzTooltip', mzTooltip)
        ;

    /* @inject */
    function mzTooltip() {
        return  { restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzTooltip.view.html',
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody)
        ;

    /* @inject */
    function mzBody() {
        return  { templateUrl : 'layout/body.template.html'
                , require     : '^mzMaterialize'
                , restrict    : 'E'
                , transclude  : true
                , replace     : true
                , scope       : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) { ctrl.body = element; }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer)
        ;

    /* @inject */
    function mzContainer() {
        return  { restrict: 'AC'
                , require: '^mzMaterialize'
                , scope:true
                , link:link
                };
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
        ;

    /* @inject */
    function mzFlex() {
        return  { template   : '<div class="mz-flex" data-ng-transclude></div>'
                , restrict   : 'E'
                , scope      : {}
                , replace    : true
                , transclude : true
                , controller : 'mzNavController as vm'
                , link       : link
                };
        function link(scope, element, attrs, ctrl) {}

      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter)
        ;

    /* @inject */
    function mzFooter() {
        return  { templateUrl: 'layout/footer.template.html'
                , restrict   : 'E'
                , scope      : { color:'@', view:'@'}
                , replace    : true
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) { element.addClass('mz-footer'); }
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
               , restrict: 'EA'
               , scope:{ s:'@' , m:'@' , l:'@' , offset:'@' }
               , transclude: true
               , replace:true
               , link: link
               };
        function link(scope, element, attrs) {
            scope.ngClasses = {};
            attrs.s &&( scope.ngClasses['s'+attrs.s] = true ); // !!attrs.s );
            attrs.m &&( scope.ngClasses['m'+scope.m] = true ); // !!scope.m );
            attrs.l &&( scope.ngClasses['l'+scope.m] = true ); // !!scope.l );
            attrs.offset &&( scope.ngClasses['offset-'+scope.offset] = true ); // FIXME: originally ` = !!attrs.offset ); ` Huh?
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
        return { restrict : 'E'
               , link     : link
               };
        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (cone) { element.append(cone); });
          }
      }

  }).call(this);

(function() { 'use strict';
    angular.module(  'ui.materialize.layout',
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
        return  { templateUrl : 'layout/main.template.html'
                , restrict    : 'E'
                , replace     : true
                , scope       : { color:'@', view:'@'}
                , link        : link
                };
        function link(scope, element, attrs) { element.addClass('mz-main'); }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.view', [])
        .directive('mzView', mzView)
        ;

    /* @inject */
    function mzView() {
        return  { template : '<main class="mz-view"><ui-view class="mz-body col s12"></ui-view></main>'
                , restrict : 'E'
                , scope    : true
                , replace  : true
                , link     : function link(scope, element, attrs) {}
                };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.colors', [])
        .directive('zBg', zBg)
        .directive('zText', zText)
        ;

    /* @inject */
    function zBg() {
        return function link(scope, element, attrs) {
            element.addClass(attrs.zBg);
            attrs.db &&( element.addClass('darken-' +attrs.db) );
            attrs.lb &&( element.addClass('lighten-'+attrs.lb) );
          };
      }

    /* @inject */
    function zText() {
        return function link(scope, element, attrs) {
            element.addClass(attrs.zText + '-text');
            attrs.lt &&( element.addClass('text-lighten-'+attrs.lt) );
            attrs.dt &&( element.addClass('text-darken-' +attrs.dt) );
          };
      }

  }).call(this);

;(function() { 'use strict';
    angular.module(  'ui.materialize.core',
        [ 'mz.core.materialize'
        , 'mz.core.controllers'
        , 'mz.core.transclude'
        , 'mz.core.transclude-replace'
        , 'mz.core.colors'
        , 'mz.core.waves'
        ]  );

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
        return  { template  : '<main class="mz-materialize" ng-class="classList" data-ng-transclude></main>'
                , restrict  : 'E'
                , replace   : true
                , transclude: true
                , scope     : true
                , controller: 'mzController as mz'
                , link      : link
                };

       function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-materialize');
            $('body').addClass('has-flex');
            $('html').addClass('has-flex');
            scope.classList = {};
            ctrl.init(element);
          }

      } // end function mzMaterailize

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.transclude-replace', [])
        .directive('ngTranscludeReplace', ngTranscludeReplace)
        ;

    /* @inject */
    function ngTranscludeReplace() {
        return { terminal : true
               , restrict : 'EA'
               , link     : link
               };

        function link(scope, element, attrs, ctrl, transclude) {
            if (!transclude) {
                $log.error('orphan', 'Illegal use of ngTranscludeReplace directive in the template.'+
                     ' Must have a parent directive that requires transclusion. ');
                return; }
            transclude(function (clone) { clone.length ? $element.replaceWith(clone) : $element.remove(); });
          }

      } // end function ngTranscludeReplace

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.transclude', [])
        .directive('ngTransclude', ngTransclude)
        .config(transcludeHelper)
        ;

    /* @ngInject */
    function transcludeHelper($provide) {
        $provide.decorator(  'ngTranscludeDirective',
            [ '$delegate'
            , function ($delegate) { $delegate.shift();  return $delegate; }
            ]   );
      }

    /* @inject */
    function ngTransclude() {
        return { restrict:'EAC' , link:link };
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
              } // end switch
          } // end function link
      } // end ngTransclude

  }).call(this);

;(function (){'use strict'
    angular
        .module('mz.core.waves', [])
        // .directive('waves', waves)
        ;

    function waves() {
        return function (scope, element, attrs) {
            jQuery(document).ready(function() { element.addClass('waves-effect waves-'+attrs.waves); });
          };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.action-group', [])
        .directive('navActionGroup', navActionGroup)
        ;

    // Global Variables
    var globalSides = { top:{} , right:{} , bottom:{} , left:{} };

    /* @ngInject */
    function navActionGroup() {
        return { templateUrl : 'nav/action-group.html'
               , restrict    : 'E'
               , controller  : function(){}
               , scope       : {side:'@'}
               , replace     : true
               , transclude  : true
               , link        : link
               };
        function link(scope, element, attrs, ctrl, transclude) {
            var inner = element.children('ul');
            ///  @scope   childClassList
            ///  @scope   mobile
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');
            element.addClass('action-group-'+scope.side)
            //////     @jQuery   apply jQuery methods when dom is ready;
            jQuery(document).ready(function() {
                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                attrs.links &&( $(element).find('.linked').addClass(attrs.links) );  });
          }
      }
  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.action', [])
        .directive('navAction', navAction)
        ;

    /*
    @ngInject
    */
    function navAction() {
        return  { templateUrl: 'nav/action.html'
                , require    : '^navActionGroup'
                , restrict   : 'E'
                , transclude : true
                , replace    : true
                , scope      : true
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {

            var inner   = element.children();
            scope.icon  = attrs.icon  || null;
            scope.link  = attrs.link  || null;
            scope.label = attrs.label || null;
            scope.waves = (attrs.waves ? 'waves-effect waves-'+attrs.waves : '');

            transclude(scope, function (clone){ inner.append(clone); });   /**/}

      } }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.brand', [])
        .directive('barBrand', barBrand)
        ;

    /* @ngInject */
    function barBrand() {
        return  { templateUrl : 'nav/bar-brand.html'
                , restrict    : 'E'
                , require     : '^mzMaterialize'
                , scope       : true
                , transclude  : true
                , replace     : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {}
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.container', [])
        // .directive('navContainer', navContainer)
        ;

    function navContainer() {
        return  { restrict: 'E'
                , scope   : {side:'@'}
                , link    : link
                };
        function link(scope, element, attrs) {
            element.addClass('mz-nav-conatainer');
            // element.addClass('nav-container-'+attrs.mzNavContainer);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.content', [])
        .directive('barContent', barContent)
        ;

    /* @ngInject */

    function barContent() {

        return { templateUrl : 'nav/bar-content.html'
               , restrict    : 'E'
               , require     : '^mzMaterialize'
               , scope       : {brand:'@'}
               , replace     : true
               , transclude  : true
               , link        : link
               };
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('bar-content');
            transclude(scope, function (clone){ element.append(clone)});
            jQuery(document).ready(function(){
                (scope.brand) &&( $(element).before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>') )
              });
          }
      } // end function mzNavBrand

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.bar', [])
        .directive('mzNavBar', mzNavBar)
        ;

    /* @inject */
    function mzNavBar($rootScope, $document) {
        return  { templateUrl : 'nav/bar.html'
                , restrict    : 'E'
                , require     : '^mzMaterialize'
                , scope       : { view:'@' , bg:'@' , side:'@' , fixed:'@' , brand:'@' , size: '@' }
                , replace     : true
                , transclude  : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            attrs.fixed &&( element.addClass('bar-fixed') );
            attrs.size  &&( element.addClass('bar-'+attrs.size) );
            ctrl.addBar(scope, element, attrs);
            jQuery(document).ready(function() {
                if (scope.brand) {
                    $(element).find('.bar-content')
                              .before('<a class="mz-nav-brand brand-logo href="#">'+scope.brand+'</a>'); }
              });
          }
      }

  }).call(this);

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
               };
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = attrs.side || 'top';
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
    angular.module('ui.materialize.nav',
        [ 'mz.nav.services'
        , 'mz.nav.controllers'
        , 'mz.nav.action-group'
        , 'mz.nav.container'
        , 'mz.nav.content'
        , 'mz.nav.action'
        , 'mz.nav.footer'
        , 'mz.nav.brand'
        , 'mz.nav.side'
        , 'mz.nav.bar'
        , 'mz.nav.side.header'
        , 'mz.nav.side.toggle'
        , 'mz.nav.side.content'
        , 'mz.nav.side.collapsible'
        ]  );

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.button', [])
        .controller('mzButtonController', mzButtonController)
        ;

    /* @ngAnotate */
    function mzButtonController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.card', [])
        .controller('mzCardController', mzCardController)
        ;

    /* @ngAnotate */
    function mzCardController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collapsible', [])
        .controller('mzCollapsibleController', mzCollapsibleController)
        ;

    /* @ngAnotate */
    function mzCollapsibleController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collection', [])
        .controller('mzCollectionController', mzCollectionController)
        ;

    /* @ngAnotate */
    function mzCollectionController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dialog', [])
        .controller('mzDialogController', mzDialogController)
        ;

    /* @ngAnotate */
    function mzDialogController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController)
        ;

    /* @ngAnotate */
    function mzDropdownController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.form', [])
        .controller('mzFormController', mzFormController)
        ;

    /* @ngAnotate */
    function mzFormController($scope) {
        // var _this = this;
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
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.modal', [])
        .controller('mzModalController', mzModalController)
        ;

    /* @ngAnotate */
    function mzModalController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.notification', [])
        .controller('mzNotificationController', mzNotificationController)
        ;

    /* @ngAnotate */
    function mzNotificationController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.progress', [])
        .controller('mzProgressController', mzProgressController)
        ;

    /* @ngAnotate */
    function mzProgressController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.ripple', [])
        .controller('mzRippleController', mzRippleController)
        ;

    /* @ngAnotate */
    function mzRippleController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);


;(function() { 'use strict';
    angular
        .module('mz.components.controllers.select', [])
        .controller('mzSelectController', mzSelectController)
        ;

    /* @ngAnotate */
    function mzSelectController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.table', [])
        .controller('mzTableController', mzTableController)
        ;

    /* @ngAnotate */
    function mzTableController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.tabs', [])
        .controller('mzTabsController', mzTabsController)
        ;

    /* @ngAnotate */
    function mzTabsController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.text-field', [])
        .controller('mzTextFieldController', mzTextFieldController)
        ;

    /* @ngAnotate */
    function mzTextFieldController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.controllers.tooltip', [])
        .controller('mzTooltipController', mzTooltipController)
        ;

    /* @ngAnotate */
    function mzTooltipController($scope) {
        // var _this = this;
        this.init = function(element) { this.element = element; };  }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.button', [])
        .provider('mzButtonService', mzButtonService)
        ;

    /* @ngAnotate */
    function mzButtonService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Buttons() { /* var _this = this; */ }
            Buttons.prototype.enable = function() {};
            return $injector.instantiate(Buttons);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.card', [])
        .provider('mzCardService', mzCardService)
        ;

    /* @ngAnotate */
    function mzCardService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Card() { /* var _this = this; */ }
            Card.prototype.enable = function() {};
            return $injector.instantiate(Card);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.collapsible', [])
        .provider('mzCollapsibleService', mzCollapsibleService)
        ;

    /* @ngAnotate */
    function mzCollapsibleService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Collapsible() { /* var _this = this; */ }
            Collapsible.prototype.enable = function() {};
            return $injector.instantiate(Collapsible);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.collection', [])
        .provider('mzCollectionService', mzCollectionService)
        ;

    /* @ngAnotate */
    function mzCollectionService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Collection() { /* var _this = this; */ }
            Collection.prototype.enable = function() {};
            return $injector.instantiate(Collection);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.dialog', [])
        .provider('mzDialogService', mzDialogService)
        ;

    /* @ngAnotate */
    function mzDialogService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Dialog() { /* var _this = this; */ }
            Dialog.prototype.enable = function() {};
            return $injector.instantiate(Dialog);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.dropdown', [])
        .provider('mzDropdownService', mzDropdownService)
        ;

    /* @ngAnotate */
    function mzDropdownService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Dropdown() { /* var _this = this; */ }
            Dropdown.prototype.enable = function() {};
            return $injector.instantiate(Dropdown);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.form', [])
        .provider('mzFormService', mzFormService)
        ;

    /* @ngAnotate */
    function mzFormService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Form() { /* var _this = this; */ }
            Form.prototype.enable = function() {};
            return $injector.instantiate(Form);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular.module('mz.components.services',
        [ 'mz.components.services.button'
        , 'mz.components.services.card'
        , 'mz.components.services.collapsible'
        , 'mz.components.services.collection'
        , 'mz.components.services.dialog'
        , 'mz.components.services.dropdown'
        , 'mz.components.services.form'
        , 'mz.components.services.media'
        , 'mz.components.services.modal'
        , 'mz.components.services.table'
        , 'mz.components.services.tabs'
        , 'mz.components.services.notification'
        , 'mz.components.services.progress'
        , 'mz.components.services.select'
        , 'mz.components.services.text-field'
        , 'mz.components.services.ripple'
        , 'mz.components.services.tooltip'
        ]  );

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.media', [])
        .provider('mzMediaService', mzMediaService)
        ;

    /* @ngAnotate */
    function mzMediaService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Media() { /* var _this = this; */ }
            Media.prototype.enable = function() {};
            return $injector.instantiate(Media);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.modal', [])
        .provider('mzModalService', mzModalService)
        ;

    /* @ngAnotate */
    function mzModalService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Modal() { /* var _this = this; */ }
            Modal.prototype.enable = function() {};
            return $injector.instantiate(Modal);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.notification', [])
        .provider('mzNotificationService', mzNotificationService)
        ;

    /* @ngAnotate */
    function mzNotificationService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Notifications() { /* var _this = this; */ }
            Notifications.prototype.enable = function() {};
            return $injector.instantiate(Notifications);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.progress', [])
        .provider('mzProgressService', mzProgressService)
        ;

    /* @ngAnotate */
    function mzProgressService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Progress() { /* var _this = this; */ }
            Progress.prototype.enable = function() {};
            return $injector.instantiate(Progress);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.ripple', [])
        .provider('mzRippleService', mzRippleService)
        ;

    /* @ngAnotate */
    function mzRippleService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Ripple() { /* var _this = this; */ }
            Ripple.prototype.enable = function() {};
            return $injector.instantiate(Ripple);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.select', [])
        .provider('mzSelectService', mzSelectService)
        ;

    /* @ngAnotate */
    function mzSelectService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Select() { /* var _this = this;  */ }
            Select.prototype.enable = function() {};
            return $injector.instantiate(Select);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.table', [])
        .provider('mzTableService', mzTableService)
        ;

    /* @ngAnotate */
    function mzTableService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Table() { /* var _this = this; */ }
            Table.prototype.enable = function() {};
            return $injector.instantiate(Table);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.tabs', [])
        .provider('mzTabsService', mzTabsService)
        ;

    /* @ngAnotate */
    function mzTabsService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Tabs() { /* var _this = this; */ }
            Tabs.prototype.enable = function() {};
            return $injector.instantiate(Tabs);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.text-field', [])
        .provider('mzTextFieldService', mzTextFieldService)
        ;

    /* @ngAnotate */
    function mzTextFieldService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function TextField() { /* var _this = this; */ }
            TextField.prototype.enable = function() {};
            return $injector.instantiate(TextField);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.components.services.tooltip', [])
        .provider('mzTooltipService', mzTooltipService)
        ;

    /* @ngAnotate */
    function mzTooltipService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Tooltip() { /* var _this = this; */ }
            Tooltip.prototype.enable = function() {};
            return $injector.instantiate(Tooltip);
          }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.controllers', [])
        ;

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.layout.services', [])
        ;

  }).call(this);

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

;(function() { 'use strict';
    angular
        .module('mz.core.controllers', [ 'mz.core.ctrl' ])
        ;

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController)
        ;

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $NavBarService, $LeftNavigationService, mzNavApi, $rootScope) {
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
            $NavBarService.add(scope, element, attrs);
          };

        this.addNav = function(scope, element, attrs, side) {
            this.$navs[side] = new sides[side](scope, element, attrs);
            this.$navs[side].activate();
          };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.controllers',
            [ 'mz.nav.controllers.nav'
            , 'mz.nav.controllers.nav.side'
            ])
        ;

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.controllers.nav.side', [])
        .controller('navSideCtrl', navSideCtrl)
        ;

    function navSideCtrl ($scope, $RightNavigationService, $LeftNavigationService) {
        var sides =
              { right : $RightNavigationService
              , left  : $LeftNavigationService
              };

        this.init = function(scope, element, attrs, side) {
            this[side] = new sides[side](scope, element, attrs);
          };
      };

}).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.controllers.nav', [])
        .controller('mzNavController', mzNavController)
        ;

    /* @ngInject */
    function mzNavController($scope) {
        // var classNames;
        // var _this = this;
        $scope.$watch(  function (value){ /* console.log(value) */ }  );
      }

  }).call(this);

;(function() { 'use strict';

    angular
        .module('mz.nav.side.collapse', [])
        .directive('sideCollapse', sideCollapse)
        ;

    /* @ngInject */
    function sideCollapse() {

        return { templateUrl : 'nav/side-collapse.html'
               , restrict    : 'E'
               , require     : '^sideCollapsible'
               , scope       : { header:'@' }
               , replace     : true
               , transclude  : true
               , link        : link
               };

        ///////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;

            inner = element.children();

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
        .module('mz.nav.side.collapsible', ['mz.nav.side.collapse'])
        .directive('sideCollapsible', sideCollapsible)
        ;

    /* @ngInject */
    function sideCollapsible() {

        return {  templateUrl: 'nav/side-collapsible.html'
               , restrict   : 'E'
               , scope      : true
               , replace    : true
               , transclude : true
               , controller : controller
               , link       : link
               };

        /* @ngInject */
        function controller() {

            this.children = {};

            this.init = function(element) {
                this.element = element;
            }
        }

        function link(scope, element, attrs, ctrl, transclude) {

                var globalSides = {  top:{} , right:{} , bottom:{} , left:{}  };
                var inner = element.children('ul');

                ///  @scope   childClassList
                ///  @scope   mobile
                scope.childClassList = attrs.links;
                attrs.mobile &&( scope.mobile = 'nav-mobile' );

                ///  @class   inner
                ///  @class   element

                if(attrs.side && globalSides[attrs.side]) {
                    element.addClass('side-collapsible-'+attrs.side); }

                jQuery(document).ready(function() {
                    attrs.links && $(element).find('.linked').addClass(attrs.links);
                    $(element).collapsible();
                });
            } // end function link
    } }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.side.content', [])
        .directive('sideContent', sideContent)
        ;

    /* @ngInject */
    function sideContent() {
        return  { templateUrl : 'nav/side-content.html'
                , restrict    : 'EA'
                , scope       : true
                , replace     : true
                , transclude  : true
                , link        : function link(scope, element, attrs, ctrl, transclude) {}
                };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.side.header', [])
        .directive('sideHeader', sideHeader)
        .directive('headerActionHuge', headerActionHuge)
        ;

    /* @ngInject */
    function sideHeader() {
        return  { templateUrl : 'nav/side-header.html'
                , restrict    : 'EA'
                , scope       : true
                , replace     : true
                , transclude  : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {}
        }

    /* @ngInject */
    function headerActionHuge() {
        return  { require  : '^mzMaterialize'
                , restrict : 'A'
                , link     : link
                };
        function link(scope, element, attrs, ctrl) {
            jQuery(document).ready(function() {
                $('.nav-right .side-header').addClass('has-large-action');
              });
          } // end function link   FIXME: Is this supposed to be nested in headerActionHuge but not sideHeader functions?
      }

  }).call(this);

;(function() { 'use strict';

    angular
        .module('mz.nav.side.toggle', [])
        .directive('mzToggleRightNav', mzToggleRightNav)
        .directive('mzToggleLeftNav', mzToggleLeftNav)
        ;


     /* @inject */
    function mzToggleRightNav() { return new ToggleNav('right', 'mzNavRight'); }

     /* @inject */
    function mzToggleLeftNav() { return new ToggleNav('left', 'mzNavLeft'); }

    function ToggleNav(side, parent) {
        this.restrict = 'A';
        this.require  = '^mzMaterialize';
        this.scope    = true
        this.link     = function link(scope, element, attrs, ctrl) {
            var icon = angular.element('<i>').addClass(' first-icon '+attrs.icon);
            var nextIcon = angular.element('<i>').addClass(' next-icon '+attrs.nextIcon);
            element.addClass('nav-side-toggle')
            element.append(icon);
            element.append(nextIcon);
            element.bind('click', cycle);
            scope.$on('$destroy', function(){ element.unbind('click', cycle); });
            function cycle(){
                ctrl.$navs[side].cycle();
                $('.nav-side-toggle').toggleClass('next');
              }
          }
      }

    /* @ngInject */
    function mzSideNavToggle() {

        return { restrict: 'A'
               , require : '^mzMaterialize'
               , scope   : { toggle:'@' , icon:'@' , nextIcon:'@' }
               , link    : link
               }

        function link(scope, element, attrs, ctrl) {
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

      } // end function mzSideNavToggle
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        ;

    /* @inject */
    function mzNavLeft($animate)  { return new SideNavigation('left'); }
    /* @inject */
    function mzNavRight($animate) { return new SideNavigation('right'); }

    function SideNavigation(side) {
        this.scope       = true;
        this.replace     = true;
        this.restrict    = 'E';
        this.require     = '^mzMaterialize';
        this.templateUrl = 'nav/side.html';

        this.link = function(scope, element, attrs, ctrl, transclude) {
            scope.view = attrs.view;
            scope.settings = {side:side};
            element.addClass('nav-'+side);
            attrs.fixed &&( element.addClass('nav-fixed') );
            ctrl.addNav(scope, element, attrs, side);
          };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module(  'mz.nav.services',
            [ 'mz.nav.services.api'
            , 'mz.nav.services.nav'
            , 'mz.nav.services.left'
            , 'mz.nav.services.right'
            , 'mz.nav.services.bar'
            , 'mz.nav.services.footer'
            ]  )
        ;

  }).call(this);

;(function(){ 'use strict';
    angular
        .module('mz.nav.services.api', [])
        .provider('mzNavApi', mzNavApi)
        .config(decorate)
        ;

    var required, navs, app;

    /* @ngInject */
    function mzNavApi(){
        var _this = this;
        function defaultConfig(){  this.hideOn = {};  this.showOn = {};  }

        this.config =
            { navBar : new defaultConfig()
            , left   : new defaultConfig()
            , right  : new defaultConfig()
            , footer : new defaultConfig()
            };
        this.hideOn = function(navType, state) {
            this.config[navType] ||( console.error('Nav type does not exist') );
            this.config[navType].hideOn[state] = true;   };

        this.$get = function($injector) {
            function Nav($NavService){  _.assign(this, _this.config);  this.config = _this.config;  };
            Nav.prototype.Nav = Nav;
            Nav.prototype.enable = function(scope) {};
            return $injector.instantiate(Nav);
            // return Nav
          }

      } // end function mzNavApi

    /* @ngInject */
    function decorate($provide) {
        $provide.decorator('mzNavApi', function ($delegate, $controller, $NavBarService){
            // $NavBarService.hideOn = $delegate.config.navBar.hideOn;
            return $delegate;
          });
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.bar', [])
        .factory('$NavBarService', NavBarService)
        .run(function($rootScope, $NavBarService){
          $rootScope.$on('$stateChangeStart', function(event, state){
            if(state.mzBar){
              angular.forEach(state.mzBar, function (value, method){
                  $NavBarService[method](value)
                })
            } else {
              angular.forEach($NavBarService.defaults, function (value, method){
                  $NavBarService[method](value)
                })
            }
          })
        })

    /* @ngInject */
    function NavBarService($NavService, $rootScope) {

        var defaults = { size:'sm' };
        var $navBars = {};

        var NavBar = {
          defaults : defaults,
          add      : add,
          size     : size
        }
        return NavBar;

        //////////////

        function add(scope, element, attrs) {
          $navBars[scope.$id]         = {};
          $navBars[scope.$id].scope   = scope;
          $navBars[scope.$id].element = element;
          $navBars[scope.$id].attrs   = attrs;
          $navBars[scope.$id].size    = attrs.size;
        }

        function size(newSize) {
          angular.forEach($navBars, function (bar){
              bar.element.removeClass('bar-' + bar.size)
              bar.size = newSize;
              bar.element.addClass('bar-' + bar.size);
            });
        }

      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.footer', [])
        .service('$FooterNavService', $FooterNavService)
        ;

    /* @ngInject */
    function $FooterNavService(){
        this.activate = function(scope) {  this.scope = scope;  };
        this.watch = function() {
            // this.scope.$watchCollection('open', function() {
            // });
          };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.left', [])
        .service('$LeftNavigationService', $LeftNavigationService)
        ;

    /* @ngInject */
    function $LeftNavigationService(){
        var that_ = this;

        this.activate = function(scope, element, attrs) {
            this.scope     = scope;
            this.attrs     = attrs;
            this.element   = element;
            this.side      = 'left';
          };

        this.init = function(element, attrs) {
            this.element = element;
            vizList = (  attrs.viz || 'fat'  ).split(/([,\s]+)/);
            vizList = (  attrs.viz || 'fat'  ).split(' ');
            vizIndex = 0;
            this.useViz(vizList[vizIndex]);
          };

        this.cycle = function() {
            vizIndex = Math.floor((vizIndex+1) % vizList.length);
            this.useViz( vizList[vizIndex] );
          };

        this.useViz = function(viz) {
            this.viz && this.element.removeClass('nav-viz-'+this.viz);
            this.element.addClass('nav-viz-'+(  this.viz = viz  ));
          };

        // return String "nav-left-STRING_VALUE_RECEIVED"
        function useClass(value) { return that_.classList+'-'+value; }
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', $RightNavigationService)
        ;

    /* @ngInject */
    function $RightNavigationService(){
        var that_ = this;

        return function Right(scope, element, attrs) {
            var _this      = this;
            this.scope     = scope;
            this.attrs     = attrs;
            this.element   = element;
            this.side      = 'right';
            this.vizList   = (  attrs.viz || 'fat'  ).split(/([,\s]+)/);
            this.vizList   = (  attrs.viz || 'fat'  ).split(' ');
            this.vizIndex  = 0;

            this.activate = function() {
                this.element.addClass('start-viz-'+this.vizList[this.vizIndex]);
                this.useViz(this.vizList[this.vizIndex]);
              };

            this.cycle = function() {
                this.vizIndex = Math.floor((this.vizIndex+1) % this.vizList.length);
                this.useViz( this.vizList[this.vizIndex] );
              };

            this.useViz = function(viz) {
                this.viz && this.element.removeClass('nav-viz-'+this.viz);
                this.element.addClass('nav-viz-'+(  this.viz = viz  ));
              };

            this.activate();
        };
      }

  }).call(this);

;(function() { 'use strict';
    angular
        .module('mz.nav.services.nav', [])
        .service('$NavService', NavService)

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

        function createDefault(string) { return 'is'+string.charAt(0).toUpperCase() + string.slice(1); }

        } // end function NavService

    }).call(this);
