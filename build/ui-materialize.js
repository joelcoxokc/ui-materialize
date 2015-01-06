;(function() {
    'use strict';

    angular.module('ui.materialize', []);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .config(uiMaterializeConfig)
        .run( uiMaterializeRun )

    /* @ngInject */
    function uiMaterializeRun($rootScope) {

        var mzNavDefaults;

        mzNavDefaults = {
            background:'white',
            logo:'orange',
            links:'orange-text',
            fixed:true
        };

        $rootScope.$mzNav = mzNavDefaults;

        $rootScope.$on('$stateChangeStart', function (event, state) {
            if(state.mvNav){
                _.assign($rootScope.$mzNav, state.mzNav);
            }
        });


        ///////////////////

        /**
         * isNavFixed
         * Check whether the navbar is fixed
         * @return {Boolean} boolean switch.
         */

        $rootScope.$mzNavReset = function() {
            $rootScope.$mzNav = mvNavDefaults;

        };
    }

    /* @ngInject */
    function uiMaterializeConfig() {

    }

}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize')
        .controller('mzController', mzController);

    /* @ngInject */
    function mzController() {



    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .controller('uiMaterializeController', uiMaterializeController);

    /* @ngInject */
    function uiMaterializeController() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .service('uiMaterializeService', uiMaterializeService)
        .factory('uiMaterializeFactory', uiMaterializeFactory);

    /* @ngInject */
    function uiMaterializeService() {}

    /* @ngInject */
    function uiMaterializeFactory() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .filter('uiMaterializeFilter', uiMaterializeFilter);

    /* @ngInject */
    function uiMaterializeFilter() {}

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzCol', mzCol);

    /* @inject */
    function mzCol() {
        return {
            template: '<div class="col" data-ng-class="ngClasses" data-ng-transclude></div>',
            restrict: 'EA',
            scope:{
                s:'@',
                m:'@',
                l:'@',
                offset:'@'
            },
            transclude: true,
            replace:true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            scope.ngClasses = {};

            if(attrs.s) {
                scope.ngClasses['s'+attrs.s] = !!attrs.s
            }
            if(attrs.m) {
                scope.ngClasses['m'+scope.m] = !!scope.m
            }
            if(attrs.l) {
                scope.ngClasses['l'+scope.m] = !!scope.l
            }
            if(attrs.offset) {
                scope.ngClasses['offset-'+scope.offset] = !!scope.offset
            }
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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzCollection', mzCollection)
        .directive('mzCollectionItem', mzCollectionItem)
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

        ////////////////

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

            /*-----------------------------*/

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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzFlex', mzFlex);

    /* @inject */
    function mzFlex() {
        return {
            template: '<div class="mz-flex" data-ng-transclude></div>',
            restrict: 'E',
            scope: true,
            replace:true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            $('body').addClass('has-flex')
            $('html').addClass('has-flex')

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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzFooter', mzFooter);

    /* @inject */
    function mzFooter() {
        return {
            template: '<footer data-ng-class="color" data-ng-transclude></footer>',
            restrict: 'E',
            scope: {
                color: '@'
            },
            transclude: true,
            replace:true,
            link: link
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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzInclude', mzInclude);

    /* @inject */
    function mzInclude() {
        return {
            restrict: 'E',
            link: link
        };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (clone) {
                element.append(clone);
            });
        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzMain', mzMain);

    /* @inject */
    function mzMain() {
        return {
            template: '<main data-ng-transclude></main>',
            restrict: 'E',
            scope: true,
            transclude: true,
            replace: true,
            link: link
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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzNav', mzNav)
        .controller('mzNavController', mzNavController);


    /* @inject */
    function mzNav($rootScope, $document) {
        return {
            template: '<nav data-ng-transclude></nav>',
            restrict: 'E',
            scope: {
                color: '@'
            },
            transclude: true,
            replace: true,
            controller:'mzNavController as mz',
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {


            //////////////////////////
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

    /* @ngInject */
    function mzNavController($rootScope) {
        var _this, mvNavDefaults;


    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzTabContent', mzTabContent);

    /* @inject */
    function mzTabContent() {
        return {
            template: '<div id="{{target}}" class="mz-tab-content" data-ng-transclude></div>',
            restrict: 'E',
            scope: {
                target:'@'
            },
            replace:true,
            transclude: true,
            link: link
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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzTab', mzTab);

    /* @inject */
    function mzTab() {
        return {
            template: '<li class="tab" ><a href="{{link}}" class="pink-text text-accent-1">{{name}}</a></li>',
            restrict: 'E',
            scope: {
                link:'@',
                name:'@'
            },
            transclude: true,
            link: link
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

/* global jQuery:false */
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzTabs', mzTabs);

    /* @inject */
    function mzTabs() {
        return {
            template: '<div class="tabs-wrapper">'+
                            '<div class="row white z-depth-1 pin-top" style="top: 0px;">'+
                                '<div class="container">'+
                                    '<ul class="tabs" data-ng-transclude>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
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
                element.children().ready(function() {

                    $('ul.tabs').tabs();
                })
            });

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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzView', mzView);

    /* @inject */
    function mzView() {
        return {
            template: '<main><ui-view></ui-view></main>',
            restrict: 'E',
            scope: true,
            replace:true,
            link: link
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
