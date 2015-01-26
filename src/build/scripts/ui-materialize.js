;(function() {
    'use strict';

    angular.module('ui.materialize', [
        'ngAnimate',
        'ui.materialize.core',
        'ui.materialize.nav',
        'ui.materialize.layout',
        'ui.materialize.components',
    ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.components.blur', [])
        .directive('mzBlur', mzBlur);

    /* @inject */
    function mzBlur() {
        return {
            // templateUrl: 'templates/mzBlur.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.buttons', [])
        .directive('mzButton', mzButton);

    /* @inject */
    function mzButton() {
        return {
            // templateUrl: 'templates/mzButton.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard);

    /* @inject */
    function mzCard() {
        return {
            // templateUrl: 'templates/mzCard.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.collapsible', [])
        .directive('mzCollapsible', mzCollapsible);

    /* @inject */
    function mzCollapsible() {
        return {
            templateUrl: 'templates/mzCollapsible.view.html',
            restrict: 'E',
            scope: true,
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

;(function() {

    'use strict';

    angular
        .module('mz.components.dialog', [])
        .directive('mzDialog', mzDialog);

    /* @inject */
    function mzDialog() {
        return {
            // templateUrl: 'templates/mzDialog.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown);

    /* @inject */
    function mzDropdown() {
        return {
            // templateUrl: 'templates/mzDropdown.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.form', [])
        .directive('mzForm', mzForm);

    /* @inject */
    function mzForm() {
        return {
            // templateUrl: 'templates/mzForm.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize.components', [
            'mz.conponents.services',
            'mz.conponents.controllers',
            'mz.conponents.blur',
            'mz.conponents.button',
            'mz.conponents.card',
            'mz.conponents.collapsible',
            'mz.conponents.collection',
            'mz.conponents.dialog',
            'mz.conponents.dropdown',
            'mz.conponents.form',
            'mz.conponents.media',
            'mz.conponents.modal',
            'mz.conponents.notification',
            'mz.conponents.progress',
            'mz.conponents.ripple',
            'mz.conponents.select',
            'mz.conponents.shadow',
            'mz.conponents.tabs',
            'mz.conponents.table',
            'mz.conponents.text-field',
            'mz.conponents.tooltip',
        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.components.media', [])
        .directive('mzMedia', mzMedia);

    /* @inject */
    function mzMedia() {
        return {
            // templateUrl: 'templates/mzMedia.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal);

    /* @inject */
    function mzModal() {
        return {
            // templateUrl: 'templates/mzModal.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.notification', [])
        .directive('mzNotification', mzNotification);

    /* @inject */
    function mzNotification() {
        return {
            // templateUrl: 'templates/mzNotification.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.progress', [])
        .directive('mzProgress', mzProgress);

    /* @inject */
    function mzProgress() {
        return {
            // templateUrl: 'templates/mzProgress.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.ripple', [])
        .directive('mzRipple', mzRipple);

    /* @inject */
    function mzRipple() {
        return {
            // templateUrl: 'templates/mzRipple.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.select', [])
        .directive('mzSelect', mzSelect);

    /* @inject */
    function mzSelect() {
        return {
            // templateUrl: 'templates/mzSelect.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.shadow', [])
        .directive('mzShadow', mzShadow);

    /* @inject */
    function mzShadow() {
        return {
            // templateUrl: 'templates/mzShadow.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.tab', [])
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

;(function() {

    'use strict';

    angular
        .module('mz.components.tab-content', [])
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
        .module('mz.components.table', [])
        .directive('mzTable', mzTable);

    /* @inject */
    function mzTable() {
        return {
            // templateUrl: 'templates/mzTable.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

/* global jQuery:false */
;(function() {

    'use strict';

    angular
        .module('mz.components.tabs', [
            'mz.components.tab',
            'mz.components.tab-content'
        ])
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
        .module('mz.components.text-field', [])
        .directive('mzTextField', mzTextField);

    /* @inject */
    function mzTextField() {
        return {
            // templateUrl: 'templates/mzTextField.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.tooltip', [])
        .directive('mzTooltip', mzTooltip);

    /* @inject */
    function mzTooltip() {
        return {
            // templateUrl: 'templates/mzTooltip.view.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs) {

            ///////////////////////////////

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize.core', [
            'mz.core.controllers',
            'mz.core.materialize',
            'mz.core.transclude',
            'mz.core.transclude-replace',

        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.core.materialize', [])
        .directive('mzMaterialize', mzMaterialize)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }

    /* @inject */
    function mzMaterialize(Scopify) {
        return {
            template: '<div class="mz-materialize" ng-class="classList" data-ng-transclude></div>',
            restrict: 'E',
            replace:true,
            transclude:true,
            scope: true,
            controller: 'mzController as mz',
                link: link
            };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-materialize');
            $('body').addClass('has-flex');
            $('html').addClass('has-flex');
            scope.classList = {};
            ctrl.init(element);
            ///////////////////////////////
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.core.transclude-replace', [])
        .directive('ngTranscludeReplace', ngTranscludeReplace);

    /* @inject */
    function ngTranscludeReplace(Scopify) {
        return {
            terminal: true,
            restrict: 'EA',
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {

            if (!transclude) {
                $log.error('orphan',
                     'Illegal use of ngTranscludeReplace directive in the template! ' +
                     'No parent directive that requires a transclusion found. ');
                return;
            }

            transclude(function (clone) {
                if (clone.length) {
                    $element.replaceWith(clone);
                } else {
                    $element.remove();
                }
            });
            ///////////////////////////////
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.core.transclude', [])
        .directive('ngTransclude', ngTransclude)
        .config(transcludeHelper);

    /* @ngInject */
    function transcludeHelper($provide) {

        $provide.decorator('ngTranscludeDirective', ['$delegate', function ($delegate) {
            $delegate.shift();

            return $delegate;
        }]);
    }

    /* @inject */
    function ngTransclude(Scopify) {
        return {
            restrict: 'EAC',
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var iScopeType = attrs.ngTransclude || 'sibling';

            switch (iScopeType) {
                case 'sibling':
                    transclude(function (clone) {
                        element.empty();
                        element.append(clone);
                    });
                    break;
                case 'parent':
                    transclude(scope, function (clone) {
                        element.empty();
                        element.append(clone);
                    });
                    break;
                case 'child':
                    var iChildScope = scope.$new();

                    transclude(iChildScope, function (clone) {
                        element.empty();
                        element.append(clone);
                        element.on('$destroy', function () {
                            iChildScope.$destroy();
                        });
                    });
                    break;
                default:
                    var count = parseInt(iScopeType);
                    if (!isNaN(count)) {
                        var toClone = scope;
                        for (var idx = 0; idx < count; idx++) {
                            if (toClone.$parent) {
                                toClone = toClone.$parent;
                            } else {
                                break;
                            }
                        }

                        transclude(toClone, function (clone) {
                            element.empty();
                            element.append(clone);
                        });
                    }
                }
            ///////////////////////////////
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody);

    /* @inject */
    function mzBody(Scopify) {
        return {
            restrict: 'E',
            require: '^mzMaterialize',
            scope: true,
            transclude: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl, transclude) {

            // scope.$parent.$parent = mzMaterialize $scope
            // scope.$parent.$parent.mz = ctrl

            ctrl.body = element;

            element.addClass('mz-body');
            // console.log('BODY',  scope);
            ///////////////////////////////
            transclude(scope, function (clone) {
                element.append(clone);
            });

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
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer);

    /* @inject */
    function mzContainer(Scopify) {
        return {
            restrict: 'AC',
            require: '^mzMaterialize',
            scope: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            Scopify('mzContainer', scope, ctrl)


            // scope.___CONTROLLER = '@inherits === [ mzFlex ]';
            // scope.____CTRL = ctrl;
            element.addClass('container');
            element.addClass('mz-container');
            // ctrl.addContainer()

        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.layout.flex', [])
        .directive('mzFlex', mzFlex)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }


    /* @inject */
    function mzFlex(Scopify) {
        return {
            template: '<div class="mz-flex" data-ng-transclude></div>',
            restrict: 'E',
            scope: {},
            replace:true,
            transclude: true,
            controller: 'mzNavController as vm',
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            var $body;


            ///////////////////////////////


        }

    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.layout.footer', [])
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
        .module('mz.layout.grid', [])
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

;(function() {

    'use strict';

    angular
        .module('mz.layout.include', [])
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
        .module('ui.materialize.layout', [
            'mz.layout.controllers',
            'mz.layout.container',
            'mz.layout.services',
            'mz.layout.include',
            'mz.layout.footer',
            'mz.layout.body',
            'mz.layout.flex',
            'mz.layout.grid',
            'mz.layout.main',
            'mz.layout.view'
        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.layout.main', [])
        .directive('mzMain', mzMain);

    /* @inject */
    function mzMain() {
        return {
            template: '<main class="mz-main" data-ng-transclude></main>',
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
        .module('mz.layout.view', [])
        .directive('mzView', mzView);

    /* @inject */
    function mzView() {
        return {
            template: '<main class="mz-view row section"><ui-view class="mz-body col s12"></ui-view></main>',
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

;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav', [
            'mz.nav.services',
            'mz.nav.controllers',
            'mz.nav.action-group',
            'mz.nav.container',
            'mz.nav.toggle',
            'mz.nav.action',
            'mz.nav.footer',
            'mz.nav.brand',
            'mz.nav.side',
            'mz.nav.bar',
        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.action-group', [])
        .directive('mzNavActions', mzNavActions)
        .directive('navActionGroup', navActionGroup);

    ////////////////////
    /// Global Variables
    var globalSides;

    globalSides = {
        top:{},
        right:{},
        bottom:{},
        left:{}
    };

    /* @ngInject */
    function mzNavActions(){
         return {
            restrict : 'E',
            controller:function(){},
            scope: true,
            transclude: true,
            link:link
        };
        ////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-actions')
            transclude(scope, function (clone) {

                element.append(clone);
            });
        }
    }

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
        return {
            template: '<ul id="{{mobile}}" class="side-nav"></ul>',
            restrict : 'E',
            controller:function(){},
            scope: true,
            transclude: true,
            link:link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var inner;

            //////
            //////     @scope   childClassList
            //////     @scope   mobile
            //////
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');

            element.addClass('nav-action-group');
            inner = element.children('ul');

            //////
            //////     @validate   the requested group location
            //////
            if (attrs.side) {
                if (globalSides[attrs.side]) {
                    element.addClass('nav-action-group-'+attrs.side);
                } else {
                    console.error('Please specify side="<top | right | bottom |left>" when using nav-action-group');
                }
            }

            //////
            //////     @translucde   Transclude element to the child <ul>
            //////
            transclude(scope, function (clone) {
                inner.append(clone);
            });

            //////
            //////     @jQuery   apply jQuery methods when dom is ready;
            //////
            jQuery(document).ready(function() {

                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                if (attrs.links) {
                    $(element).find('.linked').addClass(attrs.links);
                }
            });
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.action', [])
        .directive('navAction', navAction);

    /*
         navAction
    ===================

        @sub-directive   |  <nav-action/>
        @parent          |  <nav-tools> || <nav-tools-{top | right | bottom | left}>
        @description     |  Navigation actions
        @template        |  <li><a></a></li>

        @attributes
            //=====================
            //=====GLOBAL==========
            //  @attr   | waves
            //          | @options <true | light | red | yellow | orange | purple | green | teal>
            //          | @default = light
            //
            //  @attr   | state
            //          | ui-sref: provide a state
            //
            //  @attr   | link
            //          | href: provide a url location
            //
            //  @attr   | icon
            //          | appends a <i class="<icon-value>"></i>
            //
            //  @usage
            //          <nav-action
            //          waves= <true | light | red | yellow | orange | purple | green | teal>
            //          state= some.state
            //          ></nav-action>
            //
    ========*/
    /* @ngInject */
    function navAction() {
        return {
            template:   '<li>'+
                            '<a class="{{waves}}" data-ng-class="childClassList" ui-sref="state">' +
                                '<i data-ng-if="icon" class="{{icon}}"></i>'+
                            '</a>'+
                            // '<a data-ng-if="link" class="{{waves}}" data-ng-class="childClassList" href="{{link}}">'+
                            //     '<i data-ng-if="icon" class="{{icon}}"></i>'+
                            // '</a>'+
                        '</li>',
            restrict : 'E',
            require: '^navActionGroup',
            scope: true,
            replace:true,
            transclude: true,
            link:link
        };

        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;

            inner = element.children();

            //////
            //////     @scope   state  |  set the state for ui-sref if attribute is passed
            //////     @scope   link   |  set the link for href if attribute is passed
            //////     @scope   waves  |  set waves on scope, or default wave is specified. otherwise no waves will be used
            //////
            scope.state = attrs.state  || null;
            scope.link  = attrs.link   || null;
            scope.icon  = attrs.icon   || null;


            if (attrs.waves) {
                scope.waves = 'waves-effect ';
            }
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {

                scope.waves += 'waves-'+attrs.waves;
            } else {

                scope.waves += 'waves-light';
            }

            //////
            //////     @transclude  |  transclude the actions
            //////
            transclude(scope, function (clone) {
                inner.append(clone);
            });
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.bar', [])
        .directive('mzNav', mzNav);

    /*
        mzNav
    ===================
        @directive     |    mz-nav
        @decription    |    Controlls the global functionality for the <mz-nav> directive
        @usage         |
                       |    <mz-nav
                                 color= <background-color>
                                 side= <top | right | bottom | left>
                                 size=  <small | medium | large>
                                 fixed= <boolean>
                                 brand= <app-brand> ***** This replaces the mz-nav-brand directive
                                 view= <ui-view-name>
                             ></mz-nav>
    ====================/*
    /* @inject */
    function mzNav($rootScope, $document, Scopify) {
        return {
            templateUrl: 'templates/mzNav.template.html',
            restrict: 'E',
            require:'^mzMaterialize',
            // scope:true,
            scope: {
                color: '@',
                side:  '@',
                fixed: '@',
                brand: '@',
                view:  '@',
                size:  '@'
            },
            transclude: true,
            link: link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var side, config;

            config = {};

            side = 'top' || attrs.side;
            scope.side = side

            attrs.fixed && (config.fixed = true);
            attrs.size &&  (config[attrs.size] = true);

            ctrl.addNav(side, element, attrs, config, scope);

            transclude(scope, function (clone) {
                element.find('nav').append(clone);
            });
        }
    }


}).call(this);
(function() {
    /*
     *  TEMPLATE mz-nav
     */
    angular
        .module('ui.materialize')
        .run(["$templateCache", function($templateCache) {
            $templateCache.put('templates/mzNav.template.html',

                  '<nav class="{{color}} mz-nav-container nav-container-top">'+

                    '<mz-nav-brand ng-if="brand" class="">{{brand}}</mz-nav-brand>'+
                    '<div data-ng-if="view" class="mz-nav-container-view" ui-view="{{view}}"></div>'+

                  '</nav>'
            )
        }]);
}).call(this);


;(function() {

    'use strict';

    angular
        .module('mz.nav.brand', [])
        .directive('mzNavBrand', mzNavBrand);

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
        return {
            template: '<a class=""></a>',
            restrict : 'E',
            require: '^mzMaterialize',
            scope: true,
            transclude: true,
            replace:true,
            link:link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {

            element.addClass('mz-nav-brand brand-logo');

            transclude(scope, function (clone) {
                element.append(clone);
            });
        }
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.container', [])
        .directive('mzNavContainer', mzNavContainer);
    //     .directive('navContainer', navContainer)

    // function navContainer() {
    //   return {
    //     restrict: 'E',
    //     scope: {
    //       side: '@',
    //     },
    //     link:link
    //   };
    //   function link(scope, element, attrs) {
    //     console.log(scope.side);
    //   }
    // }

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



;(function() {

    'use strict';

    angular
        .module('mz.nav.footer', [])
        .directive('mzNavFooter', mzNavFooter);

    /*
        mzNav
    ===================
        @directive     |    mz-nav
        @decription    |    Controlls the global functionality for the <mz-nav> directive
        @usage         |
                       |    <mz-nav
                                 color= <background-color>
                                 side= <top | right | bottom | left>
                                 size=  <small | medium | large>
                                 fixed= <boolean>
                                 brand= <app-brand> ***** This replaces the mz-nav-brand directive
                                 view= <ui-view-name>
                             ></mz-nav>
    ====================/*
    /* @inject */
    function mzNav($rootScope, $document, Scopify) {
        return {
            templateUrl: 'templates/mzNav.template.html',
            restrict: 'E',
            require:'^mzMaterialize',
            // scope:true,
            scope: {
                color: '@',
                side:  '@',
                fixed: '@',
                brand: '@',
                view:  '@',
                size:  '@'
            },
            transclude: true,
            link: link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var side, config;

            config = {};

            side = 'top' || attrs.side;
            scope.side = side

            attrs.fixed && (config.fixed = true);
            attrs.size &&  (config[attrs.size] = true);

            ctrl.addNav(side, element, attrs, config, scope);

            transclude(scope, function (clone) {
                element.find('nav').append(clone);
            });
        }
    }


}).call(this);
(function() {
    /*
     *  TEMPLATE mz-nav
     */
    angular
        .module('ui.materialize')
        .run(["$templateCache", function($templateCache) {
            $templateCache.put('templates/mzNav.template.html',

                  '<nav class="{{color}} mz-nav-container nav-container-top">'+

                    '<mz-nav-brand ng-if="brand" class="">{{brand}}</mz-nav-brand>'+
                    '<div data-ng-if="view" class="mz-nav-container-view" ui-view="{{view}}"></div>'+

                  '</nav>'
            )
        }]);
}).call(this);


;(function() {

    'use strict';

    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge);
        // .directive('navSideContainer', navSideContainer)


    /* @inject */
    function mzNavLeft($animate, Scopify) {
        return new SideNavigation('left')
    }
    /* @inject */
    function mzNavRight($animate, Scopify) {
        return new SideNavigation('right')
    }

     /*
        mzNav{Side} right | Left
    ====================
        @directive     |    mz-nav-{side}
        @decription    |    Controlls the side bar navigations
        @usage         |
                       |    <mz-nav-{left || right}
                                 color= <background-color>
                                 size=  <small | medium | large>
                                 fixed= <boolean>
                                 view= <ui-view-name>
                             ></mz-nav-{left || right}>

    ====================*/
    function SideNavigation(side) {

        this.scope = true;
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^mzMaterialize';
        this.templateUrl = 'templates/navigation/nav-side/nav-side.template.html';

        ////////////////////
        ///
        ///
        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};
            element.addClass('mz-side-nav')
            ctrl.addNav(side, element, attrs, config, scope);
            // console.log('NAV-'+side.toUpperCase(), scope);

            scope.settings = {};
            scope.settings.side = side;
        };
    }

    /*
       mzNavSideHeading
    ====================
        @directive     |    mz-nav-side-heading
        @decription    |    Controlls the heading portion of the side bar directives
        @usage         |
                       |    <mz-nav-side-heading>
                             ></mz-nav-side-heading>

    ====================*/
    function mzNavSideHeading() {
        return {
            scope:      true,
            restrict:   'EA',
            transclude: true,
            link:       link
        };
        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-side-heading');

            transclude(scope, function (clone) {
                element.append(clone)
            });
        }
    }

    /*
       mzNavSideContent
    ====================
        @directive     |    mz-nav-side-content
        @decription    |    Controlls the content portion of the side bar directives
        @usage         |
                       |    <mz-nav-side-content>
                             ></mz-nav-side-content>

    ====================*/
    function mzNavSideContent() {
        return {
            scope:      true,
            restrict:   'EA',
            transclude: true,
            link:       link
        };
        ///////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-side-content');

            transclude(scope, function (clone) {
                element.append(clone)
            });
        }
    }

    function headerActionHuge() {
        return {
            restrict: 'A',
            require: '^mzMaterialize',
            // scope: true,
            link: link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl) {
            element.addClass('header-action-huge');
            ctrl.registerAction('right', 'useLargeAction');
            // .useLargeAction();
        }
    }




}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.nav.toggle', [])
        .directive('mzToggleNav', mzToggleNav)
        .directive('mzSideNavToggle', mzSideNavToggle);

    /* @inject */
    function mzToggleNav() {
         return {
            restrict: 'A',
            require: '^mzMaterialize',
            scope: {
                toggle: '@',
            },
            link:function(scope, element, attrs, ctrl) {


            }

        }
    }

     /* @ngInject */
    function mzSideNavToggle() {
        return {
            restrict: 'A',
            require: '^mzMaterialize',
            scope: {
                toggle: '@',
                icon: '@',
                nextIcon: '@',
            },
            /////////////
            ///
            ///
            link: function(scope, element, attrs, ctrl) {
                var side, toggle, toggleLeft, toggleRight, nav, icon, nextIcon;
                element.addClass('nav-side-toggle')
                scope.toggleOn = false;

                icon = angular.element('<i>').addClass(' first-icon '+scope.icon)
                nextIcon = angular.element('<i>').addClass(' next-icon '+scope.nextIcon)

                element.append(icon);
                element.append(nextIcon);


                element.on('click', function(){
                    scope.toggleOn = !scope.toggleOn;
                    toggleNext(scope.toggleOn);
                    // console.log(scope.nextIcon);
                    ctrl.$navs.right.scope.isOpen = !ctrl.$navs.right.scope.isOpen;
                    ctrl.$navs.right.scope.$apply()
                    console.log(ctrl.$navs.right.scope.isOpen);
                });



                function toggleNext() {
                    element.toggleClass('next')

                }

            }
        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.button', [])
        .controller('mzButtonController', mzButtonController);

    /* @ngAnotate */
    function mzButtonController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.card', [])
        .controller('mzCardController', mzCardController);

    /* @ngAnotate */
    function mzCardController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.collapsible', [])
        .controller('mzCollapsibleController', mzCollapsibleController);

    /* @ngAnotate */
    function mzCollapsibleController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.collection', [])
        .controller('mzCollectionController', mzCollectionController);

    /* @ngAnotate */
    function mzCollectionController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.dialog', [])
        .controller('mzDialogController', mzDialogController);

    /* @ngAnotate */
    function mzDialogController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController);

    /* @ngAnotate */
    function mzDropdownController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.form', [])
        .controller('mzFormController', mzFormController);

    /* @ngAnotate */
    function mzFormController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers', [
            'mz.components.controllers.button',
            'mz.components.controllers.card',
            'mz.components.controllers.collapsible',
            'mz.components.controllers.collection',
            'mz.components.controllers.dialog',
            'mz.components.controllers.dropdown',
            'mz.components.controllers.form',
            'mz.components.controllers.media',
            'mz.components.controllers.modal',
            'mz.components.controllers.table',
            'mz.components.controllers.tabs',
            'mz.components.controllers.notification',
            'mz.components.controllers.progress',
            'mz.components.controllers.select',
            'mz.components.controllers.text-field',
            'mz.components.controllers.ripple',
            'mz.components.controllers.tooltip',
        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.media', [])
        .controller('mzMediaController', mzMediaController);

    /* @ngAnotate */
    function mzMediaController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.modal', [])
        .controller('mzModalController', mzModalController);

    /* @ngAnotate */
    function mzModalController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.button', [])
        .provider('mzButtonService', mzButtonService);

    /* @ngAnotate */
    function mzButtonService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.card', [])
        .provider('mzCardService', mzCardService);

    /* @ngAnotate */
    function mzCardService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.collapsible', [])
        .provider('mzCollapsibleService', mzCollapsibleService);

    /* @ngAnotate */
    function mzCollapsibleService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.collection', [])
        .provider('mzCollectionService', mzCollectionService);

    /* @ngAnotate */
    function mzCollectionService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.dialog', [])
        .provider('mzDialogService', mzDialogService);

    /* @ngAnotate */
    function mzDialogService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.dropdown', [])
        .provider('mzDropdownService', mzDropdownService);

    /* @ngAnotate */
    function mzDropdownService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.form', [])
        .provider('mzFormService', mzFormService);

    /* @ngAnotate */
    function mzFormService($scope) {

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

;(function() {

    'use strict';

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
;(function() {

    'use strict';

    angular
        .module('mz.components.services.media', [])
        .provider('mzMediaService', mzMediaService);

    /* @ngAnotate */
    function mzMediaService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.modal', [])
        .provider('mzModalService', mzModalService);

    /* @ngAnotate */
    function mzModalService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.notification', [])
        .provider('mzNotificationService', mzNotificationService);

    /* @ngAnotate */
    function mzNotificationService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.progress', [])
        .provider('mzProgressService', mzProgressService);

    /* @ngAnotate */
    function mzProgressService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.ripple', [])
        .provider('mzRippleService', mzRippleService);

    /* @ngAnotate */
    function mzRippleService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.select', [])
        .provider('mzSelectService', mzSelectService);

    /* @ngAnotate */
    function mzSelectService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.table', [])
        .provider('mzTableService', mzTableService);

    /* @ngAnotate */
    function mzTableService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.tabs', [])
        .provider('mzTabsService', mzTabsService);

    /* @ngAnotate */
    function mzTabsService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.text-field', [])
        .provider('mzTextFieldService', mzTextFieldService);

    /* @ngAnotate */
    function mzTextFieldService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.components.services.tooltip', [])
        .provider('mzTooltipService', mzTooltipService);

    /* @ngAnotate */
    function mzTooltipService($scope) {

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

;(function() {

    'use strict';

    angular
        .module('mz.core.ctrl', [])
        .controller('mzController', mzController);

    /* @ngAnotate */
    function mzController($scope, $q, $RightNavigationService, $TopNavigationService) {
        // $scope.mzNav = mzNavApi;
        var _this = this;

        this.$navs = {};
        this.$settings = {
            top:{},
            bottom:{},
            right:{
                actions:[]
            },
            left:{},
        };

        this.init = function(element) {
            this.element = element;

        };

        this.addNav = function(side, element, attrs, config, scope) {
            var NavService = useService(side);
            this.$navs[side] = new NavService(side, element, attrs, config, scope);
            this.$navs[side].activate();
            this.invokeRegistry(side);
            // console.log('ADD '+side.toUpperCase()+'-Nav',  this.$navs[side]);
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
                top:   $TopNavigationService
            };
            return services[service];
        }

    }

}).call(this);

;(function() {
    'use strict';

    angular
        .module('mz.core.controllers', [
            'mz.core.ctrl'
        ]);

}).call(this);
;(function() {
    'use strict';

    angular
        .module('mz.layout.controllers', []);

}).call(this);
;(function() {
    'use strict';

    angular
        .module('mz.layout.services', []);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.controllers', [
            'mz.nav.controllers.nav'
        ]);


}).call(this);
;(function() {

    'use strict';

    angular
        .module('mz.nav.controllers.nav', [])
        .controller('mzNavController', mzNavController);

    /* @ngInject */
    function mzNavController($scope, $mzConfig, Scopify) {


        var _this, classNames;
        _this = this;
        this.shown = true
        Scopify('mzNavController', $scope, this)
        this.show = false
        classNames = {
            $hasAsideLeft:  'has-side-left',
            $hasAsideRight: 'has-side-right',
            $isLeftOpen:    'mz-side-left-open',
            $isRightOpen:   'mz-side-right-open',
            $isLeftFolded:  'mz-side-left-folded',
            $isRightFolded: 'mz-side-right-folded'
        }

        angular.extend(_this, $mzConfig);

        _this.init = function(context) {

            _this.$mz = context;
        };

        $scope.onAdd = function(nav) {
            // console.log('[mzConfig]: onAdd', nav.name);
            var condition   = _this.conditions[nav.name];
            var toggle      = condition.add;
            _this.$mz[toggle] = true;
        };

        _this.addContainer = function () {
            _this.$mz.$hasContainer;
            _this.$mz.$emit('$hasContainer')
        }

        _this.$toggleSide = function(name) {
            var nav = _this.navs[name];
        }

        $scope.$watch(function ( value ) {
            // console.log(value)
        })
    }

}).call(this);
;(function() {
    'use strict';

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
        .provider('mzNavApi', mzNavApi);

    var required, navs, app;

    /* @ngInject */
    function mzNavApi(){

        var _this    = this;
        var that_    = this;

        this.config = {
            name:'mzNav',
            model: '$mzNav',
            class: 'mz-nav',
            init:  function() {
                var _this = this,
                has = [];
                angular.forEach(this.navs, function (nav, key){
                    has.push('has-'+key)
                });
                this.hasNavs = has
            },
            navs:{
                top: {
                    name:'top',
                    model:'top',
                    class:'nav-top',
                    fixed: {
                        default:true,
                        scope:'isFixed',
                        class:'nav-top-fixed'
                    },
                    small:{
                        default:true,
                        scope:'isSmall',
                        class: 'mav-top-small'
                    },
                    theme:{
                        text: {
                            color:'grey',
                            lighten:4,
                            darken:false
                        },

                        background: {
                            color:'grey',
                            lighten:false,
                            darken:4
                        }
                    },
                    expand:{
                        default:false,
                        name:'expand',
                        scope:'isExpanded',
                        class:'naz-top-expanded'
                    },
                    hide:{
                        default:false,
                        name:'hide',
                        scope:'isHidden',
                        class:'nav-top-hidden'
                    }
                },
                right: {
                    name: 'right',
                    model: 'right',
                    class: 'nav-right',
                    classList:'',
                    fixed:{
                        default:true,
                        name:'fixed',
                        scope:'isFixed',
                        class:'nav-right-fixed'},
                    medium:{
                        default:true,
                        name:'medium',
                        scope:'isMedium',
                        class:'nav-right-medium'},
                    theme:{
                        text: {
                            color:'grey',
                            lighten:4,
                            darken:false},

                        background: {
                            color:'grey',
                            lighten:false,
                            darken:4}},
                    open:{
                        name:'open',
                        scope:'isOpen',
                        class:'nav-right-open',
                        default:false,
                        toggle:function() {
                            this[this.scope] = !this[this.scope];
                        }
                    },
                    fold:{
                        name:'fold',
                        scope:'isFolded',
                        class:'nav-right-fold',
                        default:true,
                        toggle: function() {
                            this[this.scope] = !this[this.scope];
                        }}}}}

         /////
        //////////////////////////////
        //////////////////////////////////////////////////////
        this.$get = function($injector) {

            function Nav($NavService){
                _.assign(this, _this.config);
                // this.init();
                // this.$navs = {};

                // this.$navs.top = topNavService;
                // this.$navs.top.enable(this.navs.top)

                // this.$navs.bottom = bottomNavService;
                // // this.$navs.bottom.enable(this.navs.bottom)

                // this.$navs.right = rightNavService;
                // this.$navs.right.enable(this.navs.right)

                // this.$navs.left = leftNavService;
                // this.$navs.left.enable(this.navs.left)
            }

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

        $provide.decorator('mzNavApi', function ($delegate, $controller){
            // console.log($delegate);
            var ctrl   = $controller('mzController')




            return $delegate
        });
    }////////////////////////////////////


        // .config(decorate)

}).call(this);
;(function() {
    'use strict';

    angular
        .module('mz.nav.services.bar', [])
        .service('$NavBarService', NavBarService);

    /* @ngInject */
    function NavBarService($NavService) {
        var NavBar, defaults;


        NavBar = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

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

        return NavBar;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);

;(function() {

    'use strict';

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
;(function() {

    'use strict';

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

;(function() {
    'use strict';

    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', RightNavigationService);

    /* @ngInject */
    function RightNavigationService($NavService) {
        var RightNavigation, defaults;


        RightNavigation = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

        };

        RightNavigation.prototype = _.create($NavService.prototype, {'constructor':RightNavigation})

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.activate = function() {
            this.resetClassList();
            this.startWatch();
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.open = function() {

            this.element.addClass(this.classes.open);
            if (this.config.fold) {
                this.unfold()
            }
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.close = function() {
            this.element.removeClass(this.classes.open);
            if (this.config.fold) {
                this.fold();
            }
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.fold = function() {
            this.element.addClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.unfold = function(value, classList) {
            this.element.removeClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':unfold');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.startWatch = function(value, classList) {
            this.watch('isOpen', function (value) {
                // console.log('test');
                if (value) {
                    this.open();
                } else {
                    this.close();
                }
            });
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.useLargeAction = function() {
            this.addClass('has-large-action');
        }

        return RightNavigation;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);

;(function() {
    'use strict';

    angular
        .module('mz.nav.services.nav', [])
        .service('$NavService', NavService);

    /* @ngInject */
    function NavService(EventDispatcher) {
        var Navigation, defaults, services, sideDeligate;

        Navigation = function(side, element, attrs, config, scope) {
            var _this, Inheritance;


            config = config || {};

            EventDispatcher.apply(this, arguments);

            _this           = this;

            this.side      = side;
            this.attrs     = attrs;
            this.element   = element;
            this.defaults  = {};
            this.config    = {};

            this.classes   = {};
            this.scope     = scope;

            this.enable = function() {

                this.class     = createClass(this.side);
                this.defaults  = getDefaults(this.side);
                this.config    = this.defaults;

                _.assign(this.config, config);

                _.assign(this.scope, createScope(this.config));

                this.resetClassList(this.config);

                this.addClass(this.class);

            }

            //////////////////////////
            /// Privledged Methods


            this.resetConfig = function() {
                _.assign(this.scope, createScope(this.config))
                this.classes  = resetClassList(this.config);
            };
            /**
             * resetClassList
             * @description      Reset all classes to the current configurations set on
             *                   this.classes and this.scope
             *                   and add and remove classes from this.element if necessary;
             */
            this.resetClassList = function() {
                _.forEach(this.config, this.createClassList);

            }

            /**
             * addClass         Helper method to add class to this.element
             */
            this.addClass = function(className) {
                this.element.addClass(className);
            };

            /**
             * removeClass         Helper method to add class to this.element
             */
            this.removeClass = function(className) {
                this.element.removeClass(className);
            };

            /**
             * toggleClass         Helper method to add class to this.element
             */
            this.toggleClass = function(className) {
                this.element.toggleClass(className);
            };

            //////////////////////////
            /// Private Methods



            this.createClassList = function(bool, classEnding) {
                var className;

                className = prefixClass(classEnding);
                _this.classes[classEnding] = className;

                bool
                  ? _this.addClass(className)
                  : _this.element.hasClass(className) && (_this.removeClass(className));
            }

            function prefixClass(className) {
                return _this.class + '-' +className;
            }

            ///
            /////
            this.enable();
            ////////////////
            ////////////////////////
        };

        Navigation.prototype = _.create(EventDispatcher.prototype, {'constructor': Navigation.prototype})


        ////////////////////////
        ///
        ///
        Navigation.prototype.fix = function(value, classList) {
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':fixed');
        };

        ////////////////////////
        ///
        ///
        Navigation.prototype.unfix = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':unfixed');
        };


        ////////////////////////
        ///
        ///
        Navigation.prototype.watch = function(key, callback) {
            var _this = this;
            this.scope.$watch(key, function() {
                callback.apply(_this, arguments)
            });
        };

        ////////////////////////
        ///
        ///
        Navigation.prototype.broadcast = function(msg, data) {
            this.scope.$broadcast(msg, data);
        };

        ////////////////////////
        ///
        ///
        Navigation.prototype.emit = function(msg, data) {
            this.scope.$emit(msg, data);
        };

        return Navigation;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

        /**
         * useService                   return the service to inherite from
         * @param  {String} service     <top | right | bottom | left>
         * @return {Constructor}        Use the given service to inherit it's prototype
         */
        // function useService(service){
        //     var services;

        //     services = {
        //         right: $RightNavigationService,
        //         top:   $TopNavigationService
        //     };
        //     return services[service];
        // }

        /**
         * retrieve                         defaults for the given navigation side
         * @param  {String} defaultSide     <top | right | bottom | left>
         * @return {Object}                 return the default configurations for the specified navigation
         */
        function getDefaults(defaultSide){
            var defaults = {};

            defaults.right = {
                open : false,
                fixed: true,
                fold:  true,
                front: true,
            };
            defaults.top = {
                hide:    false,
                fixed:   true,
                expand:  false,
                small:   false,
                medium:  true,
                large:   false,
            };

            return defaults[defaultSide]
        }

    }
    function createScope(configuration) {
        var scope, diffs;
        scope = {};
        diffs = {
            expand: 'expanded',
            hide:   'hidden',
        };
        _.forEach(configuration, function (value, key){
            var val, second;
            if(diffs[key]) {
                val = createDefault(diffs[key]);
            } else {
                val = createDefault(key);
            }
            scope[val] = value;
        });
        // console.log(scope);
        return scope;
    }
    function createDefault(string) {
        var key, obj;
        key = 'is';
        key += string.charAt(0).toUpperCase() + string.slice(1);
        // console.log(key);
        return key;
    }


}).call(this);
