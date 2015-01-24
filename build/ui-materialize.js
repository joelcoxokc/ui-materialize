;(function() {
    'use strict';

    angular.module('ui.materialize', [
        'ngAnimate',
        'ui.materialize.api',
        'ui.materialize.nav',
        'ui.materialize.layout',
        'ui.materialize.components',
    ])
    .run(Run)

    /* @ngInject */
    function Run($rootScope) {

    }

}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize.api', [
            'ui.materialize.nav.api',
        ])


}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize.components', []);

}).call(this);
// /* global Class:false */
// ;(function() {
//     'use strict';


//     angular
//         .module('ui.materialize')
//         .classy.controller( mzController() );

//     // /* @ngInject */
//     function mzController() {

//         return {

//             name: 'mzController',

//             inject: ['$scope', '$location', 'User', '$mzApi'],
//             data: {
//                 todos: 'User.all()',
//                 editedTodo: 'null'
//             },
//             init: function() {
//                 // this.addTodo({
//                 //     title: 'My first todo',
//                 //     completed: false
//                 // });
//             },
//             watch: {
//                 '{object}todos': '_onTodoChange'
//             },
//             methods: {
//                 addTodo: function(newTodo) {
//                     var newTodo = newTodo || this.$.newTodo.trim();
//                     this.$.todos.push({
//                         title: newTodo,
//                         completed: false
//                     });
//                 },

//                 _onTodoChange: function(newValue, oldValue) {
//                     this.$.remainingCount =
//                         this.filterFilter(this.$.todos, { completed: false }).length;
//                 }
//             }

//         }
//     }



// }).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .controller('mzNavController', mzNavController)

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
        .module('ui.materialize')
        .controller('uiMaterializeController', uiMaterializeController);

    /* @ngInject */
    function uiMaterializeController() {

    }

}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize.layout', []);

}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav', [])
        .service('Scopify', function(){
            return function (name, scope, ctrl){
                ctrl = ctrl || {__NAME:'--NO INHERITANTS--'}
                if(scope.__NAME) {
                    scope.__NAME += '  sharded with ==== [mzSideNav]';
                } else {
                    scope.__NAME = 'mzSideNav'
                }
                if(scope.$parent.__NAME){
                    scope.___hasParent += ' -- '+scope.$parent.__NAME
                }

                // scope.__SCOPE = '@scope === [ mzSideNav ]';

                scope.___CONTROLLER = '@inherits === [ '+ctrl.__NAME+' ]';
            }
        })


}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize.system', []);

}).call(this);
;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Components', Components);

        function Components() {

            var _this = this;


                // Initialize this api
            this.initialize = function(params) {
                angular.extend(this, params);
            }

            this.$get = function() {
                return {
                    method:function(){}
                }
            }


        }

}).call(this);
;(function (){

    'use strict';
    /**
    * Event dispatcher class,
    * add ability to dispatch event
    * on native classes.
    *
    * Use of Class.js
    *
    * @author universalmind.com
    */
    angular
        .module('ui.materialize.api')
        .provider('EventDispatcher', EventDispatcher);


    function EventDispatcher(){

        var that_ = this;
        this.init = 'initialized'

        function eventDispatcher(){

            this._listeners = {};
        }

        /**
        * Add a listener on the object
        * @param type : Event type
        * @param listener : Listener callback
        */
        EventDispatcher.addEventListener = function(type,listener) {
            if (!this._listeners[type]) {
                this._listeners[type] = [];
            }
            this._listeners[type].push(listener)
        };


        /**
           * Remove a listener on the object
           * @param type : Event type
           * @param listener : Listener callback
           */
        EventDispatcher.addEventListener.removeEventListener = function(type,listener) {
          if (this._listeners[type]) {
            var index = this._listeners[type].indexOf(listener);

            if (index!==-1) {
                this._listeners[type].splice(index,1);
            }
          }
        };


        /**
        * Dispatch an event to all registered listener
        * @param Mutiple params available, first must be string
        */
        EventDispatcher.dispatchEvent = function() {
            var listeners;

            if (typeof arguments[0] !== 'string'){
                console.warn('EventDispatcher','First params must be an event type (String)')
            } else {
                listeners = this._listeners[arguments[0]];

                for (var key in listeners) {
                    //This could use .apply(arguments) instead, but there is currently a bug with it.
                    listeners[key](arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
                }
            }
        };

         /////
        //////////////////////////////
        //////////////////////////////////////////////////////
            that_.$get = function($injector) {
                var events = eventDispatcher
                return events
            }



        //////////////////////////////////////////////////////
        //////////////////////////////
        // console.log(_this.navs);

    }

}).call(this);
;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Layout', $Layout)

        function $Layout() {

            var _this = this;


            // Initialize this api
            this.initialize = function(params) {

            }
            this.$get = function() {
                var instance = {};
                return instance;
            }
        }

}).call(this);

;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Menu', $Menu);

        function $Menu() {

            var _this = this;

            this._menus = {};

            // Initialize this api

            this.$get = function(){
                return {};
            }

            this.addMenu = function(menu) {

                this._menus[menuId] = menu;
            };

            this.removeMenu = function(menuId) {

                var menu = this.menus[menuId];
                delete this.menus[menuId];
                return mewnu;
            };

            this.getMenu = function(menuId) {

                if (this.menus[menuId]) {
                    return this.menus[menuId];
                }
            };

            this.updateMenu = function(menu) {

                if (this.menus[menu.menuId]) {
                    this.menus[menuId] = menu;
                }
            };

            this.toggleMenu = function(menu) {
                if (this.menus[menu.menuId]) {

                }
            };
            this.isMenu = function(menu){
                if (this.menus[menu.Id]) {
                    return true;
                }
                return false;
            }
        }

}).call(this);
;(function(){

    'use strict';

    var required, navs, app;

    app = angular.module('ui.materialize.api')

    app.provider('$Nav', Nav)
    /* @ngInject */
    function Nav(){


        this.$get = function (options){
            return new Nav(options)
        }

        function Nav(options){

            _.assign(this, options);


            this.$d   = $d;
            this.name = options.name;
            this.$el  = this.$d(options.class);

            this.global$ = {};

            this[options.ngModel] = {};

            this.get$ = function() {
                this.$el  = this.$d(options.class);
                return this.$el;
            }
        }
        Nav.prototype.setGlobal = function(options) {
            var globalVal;

            globalVal = {name:options.name, class:d(options.class)};
            globalVal[options.scope]   = true;
            this.global$[options.name] = globalVal;
        }

        Nav.prototype.Nav = Nav;
        Nav.prototype.stateConfig = function(name) {};
        Nav.prototype.updateMenu = function(menu)  {};
        Nav.prototype.toggleMenu = function(menu)  {};

        Nav.prototype.state = function(name)       {
            console.log('Nagigation.prototype.state');
        };
        Nav.prototype.isMenu = function(menu)      {};
        Nav.prototype.create = function(options)   {};

        function d(){
            var args = _.map(arguments, function (item){
                return '.'+item
            })
            return args.join('');
        }

        function $d(){
            var args = _.map(arguments, function (item){
                return '.'+item
            })
            return jQuery.apply(jQuery, args);
        }
    }


    function $Navigation() {

        var _this    = this;
        var _Nav     = $NavProvider;


        this.new = function(options){
            _Nav = _Nav.$get(options)
            return this;
        };
        this.global = function(options){
            _Nav.setGlobal(options);
            return this;
        };
        this.top    = new NavItem('top');
        this.bottom = new NavItem('bottom');
        this.left   = new NavItem('left');
        this.right  = new NavItem('right');

            function NavItem(name){
                this.name = name;
            }
            NavItem.prototype.new = function(options) {
                if (options.inherit) {
                    _Nav.$mzNav[this.name] = this;
                }

                _Nav.$mzNav[this.name] = this;
                return this;
            },
            NavItem.prototype.add = function(options) {
                _.extend(this.globals$, options);
                return this;
            },
            NavItem.prototype.location = function(options) {
                _.extend(this.location$, options);
                    return this;
            },
            NavItem.prototype.size = function(options) {
                _.extend(this.size$, options);
                    return this;
            },
            NavItem.prototype.color = function(options) {
                _.extend(this.color$, options);
                    return this;
            },
            NavItem.prototype.method = function(options) {
                _.extend(this.method$, options);
                    return this;
            },
            NavItem.prototype.default = function(options) {
                _.extend(this.default$, options);
                    return this;
            },
            NavItem.prototype.media = function(options) {
                _.extend(this.media$, options);
                    return this;
            }

        // Create the navigation layer


        /////
        //////////////////////////////
        //////////////////////////////////////////////////////
        this.$get = function($injector) {
            // console.log(_this.navs);
            return _Nav

        }
        //////////////////////////////////////////////////////
        //////////////////////////////
        /////
    }
}).call(this);
;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$System', System);

        function System() {

            var _this = this;

            // Initialize this api
            this.initialize = function(params) {

            }

            this.$get = function() {
                var instance = {};
                return instance;
            }

        }

}).call(this);
;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$mzApi', mzApi)
        .config(function () {

            console.log();
            // var API = mzNav_APIProvider



            // API
            //     .new({
            //         name:'mzNav',
            //         ngModel:'$mzNav',
            //         class:'mz-nav',
            //     })


            // API
            //     .top()
            //         .new({
            //             inherit:  true,
            //             ngModule: 'top',
            //             class:    'mz-nav-top'
            //         })

            //         .style({
            //             fixed: {
            //                 scope: 'isFixed',
            //                 class: 'nav-top-fixed'
            //             },
            //             small: {
            //                 scope: 'isSmall',
            //                 class: 'nav-top-small'
            //             }
            //         })

            //         .theme({
            //             text: {
            //                 color:'grey',
            //                 lighten:4,
            //                 darken:false},

            //             background: {
            //                 color:'grey',
            //                 lighten:false,
            //                 darken:4
            //             }
            //         })

            //         .method({
            //              name: 'expand',
            //             scope: 'isExpanded',
            //             class: 'nav-top-expanded'})

            //         .method({
            //              name: 'hidden',
            //             scope: 'isHidden',
            //             class: 'nav-top-hidden'})


            // API
            //     .right
            //         .new({
            //           inherit: true,
            //           ngModel: 'right',
            //             class:  'mz-nav-right'})

            //         .style({
            //             fixed: {
            //                 scope:  'isFixed',
            //                 class:  'nav-right-fixed'},

            //             medium: {
            //                 scope:  'isMedium',
            //                 class:  'nav-right-medium'}})


            //         .theme({
            //             text: {
            //                 color:'grey',
            //                 lighten:4,
            //                 darken:false},

            //             background: {
            //                 color:'grey',
            //                 lighten:false,
            //                 darken:4}})

            //         .method({
            //              name: 'open',
            //             scope: 'isOpen',
            //             class: 'nav-right-open',
            //             event: 'nav.right.opened',
            //           default: false})

            //         .method({
            //              name: 'folded',
            //             scope: 'isFolded',
            //             event: 'nav.right.folded',
            //             class: 'nav-right-hidden'})

            //         .media({
            //              name: 'small',
            //             label: 'sm',
            //             scope: 'atSmall',
            //             class: 'nav-right-sm'})

            //         .media({
            //              name: 'medium',
            //             label: 'md',
            //             scope: 'atMedium',
            //             class: 'nav-right-md'})

            //         .media({
            //              name: 'large',
            //             label: 'lg',
            //             scope: 'atLarge',
            //             class: 'nav-right-lg'})
        })

        /* @ngInject */
        function mzApi($LayoutProvider, $SystemProvider, $ComponentsProvider, $MenuProvider, EventDispatcherProvider, $NavProvider) {
        // function mzApi() {
        //
            var evet = EventDispatcherProvider
            // console.log(evet);
            var _this = this;

            this.API         = this;
            this.LAYOUT      = $LayoutProvider;
            this.SYSTEM      = $SystemProvider;
            this.COMPONENTS  = $ComponentsProvider;
            this.MENU        = $MenuProvider
            this.CONFIG      = $MenuProvider
            this.NAVIGATION  = $NavProvider;

            this.$get = function() {
                // console.log(_this.$menu)
                return {

                }

            }

        }

}).call(this);
;(function(){

  'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$mzConfiguration', $mzConfig);


            //////////////////////////////////////////////////////
    function $mzConfig() {

        var _this = this;
        _this.navs = {
            top:{},
            bottom:{},
            right:{},
            left:{}
        };

        _this.navProps = {
            top: {
                small:    {name: 'small', scope:'isSmall',  val:true,  class:'nav-top-small',   event:'$navTopIsSmall',   unToggleOnToggle: ['isMedium', 'isLarge'], onToggle: 'onToggleSmall', onChange:function(value, cb){}},
                medium:   {name: 'medium', scope:'isMedium', val:false,   class:'nav-top-medium', event:'$navTopImedium', unToggleOnToggle: ['isSmall', 'isLarge'], onToggle: 'onToggleMedium', onChange:function(value){}},
                large:    {name: 'large', scope:'isLarge',  val:false,   class:'nav-top-large',  event:'$navTopIsLarge',  unToggleOnToggle: ['isSmall', 'isMedium'], onToggle: 'onToggleLarge', onChange:function(value){}},
                fixed:    {name: 'fixed', scope:'isFixed',  val:true,   class:'nav-top-fixed',  event:'$navTopFixed',        unToggleOnToggle: [], onToggle: 'onToggleFixed', onChange:function(value){return !!val}},
            },
            right: {
                open:    {name: 'open', scope:'isOpened',  val:true,    class:'nav-right-open',   event:'$navRightOpened', onToggle: 'onRightNavOpened', onChange:function(value){}},
                fold:    {name: 'fold', scope:'isFolded',  val:false,    class:'nav-right-fold',   event:'$navRightFolded', onToggle: 'onRightNavFolded', onChange:function(value){}},
            },
            bottom: {
                small:    {name: 'small', scope:'isSmall',  val:true,   class:'nav-bottom-small',   event:'$navBottomIsSmall', unToggleOnToggle: ['isMedium', 'isLarge'], onToggle: 'onToggleSmall', onChange:function(value){}},
                medium:   {name: 'medium', scope:'isMedium', val:false,   class:'nav-bottom-medium', event:'$navBottomIsMedium', unToggleOnToggle: ['isSmall', 'isLarge'], onToggle: 'onToggleMedium', onChange:function(value){}},
                large:    {name: 'large', scope:'isLarge',  val:false,   class:'nav-bottom-large',  event:'$navBottomIsLarge', unToggleOnToggle: ['isMedium', 'isSmall'],  onToggle: 'onToggleLarge', onChange:function(value){}},
                fixed:    {name: 'fixed', scope:'isFixed',  val:false,   class:'nav-bottom-fixed',  event:'$navBottomFixed',  unToggleOnToggle: [],  onToggle: 'onToggleFixed', onChange:function(value){return !!val}},
            },
            left: {
                open:    {name: 'open', scope:'isOpened',  val:false,    class:'nav-left-open',   event:'$navLeftOpened', unToggleOnToggle: ['isFolded'], onToggle: 'onLeftNavOpened', onChange:function(value){}},
                fold:    {name: 'fold', scope:'isFolded',  val:false,    class:'nav-left-fold',   event:'$navLeftFolded', unToggleOnToggle: ['isOpened'],  onToggle: 'onLeftNavFolded', onChange:function(value){}},
            }
        };

        _this.createToggle = function (nav, property) {
            // Select Specific Nav and properties;

            // Add the scope value to nav
                nav[property.scope] = property.val;
                nav.unToggleOnToggle = property.unToggleOnToggle;


            return function ( callback ) {

                nav[property.onToggle] = function (callback){

                    _.forEach(this.unToggleOnToggle, function (item){
                        nav[item] = false;
                    });

                    var oldValue = nav[toggleProperty.scope];
                    nav[toggleProperty.scope] = !nav[toggleProperty.scope];

                    // Handle Case for onToggle event, callback method, or return value
                    (nav._$onToggle || angular.noop)(nav[toggleProperty.scope], oldValue);
                    (callback || angular.noop)(nav[toggleProperty.scope], oldValue)
                    return nav.val
                }
            }};

        _this.conditions = {
            top: {
                add:  '$hasNavTop',
            },
            right: {
                add:  '$hasAsideRight',
                open: '$isRightOpen',
                close:'$isRightClosed',
                fold: '$isLeftFolded'
            },
            bottom: {},
            left: {
                add:  '$hasAsideLeft',
                open: '$isLeftOpen',
                close:'$isLeftClosed',
                fold: '$isLeftFolded'
            }},

        _this.events = {
            top:{
                add:'$navAdded'
            },
            right:{
                add:'$navAdded',
                open:'$navOpened',
                close:'$navClosed',
                fold:'$navFolded'
            },
            bottom:{
                add:'$navAdded'
            },
            left:{
                add:'$navAdded',
                open:'$navOpened',
                close:'$navClosed',
                fold:'$navFolded'
            }};

        _this.classNames = {
            top:{
                open: 'nav-top-open',
                close:'nav-top-close',
                sm: 'nav-top-sm',
                md: 'nav-top-md',
                lg: 'nav-top-lg'
            },
            right:{
                open:'nav-right-open',
                close:'nav-right-close',
                fold:'nav-right-fold'
            },
            bottom:{
                open: 'nav-bottom-open',
                close:'nav-bottom-close',
                sm: 'nav-bottom-sm',
                md: 'nav-bottom-md',
                lg: 'nav-bottom-lg'
            },
            left:{
                open:'nav-left-open',
                close:'nav-left-close',
                fold:'nav-left-fold'
            }};

        _this.createNav = function(nav) {
                nav.type = type;
                nav.$toggles     = {};
                _this.navs[type] = this.setNavOptions(nav);
                nav.$toggle = function() {
                    nav.$toggles(cb);
                }}


        _this.configNavs = function(nav) {
            _.forEach(_this.navs, function (nav, type) {
                nav.type = type;
                nav.$toggles     = {};
                _this.navs[type] = _this.setNavOptions(nav);
                nav.$toggle = function(name, cb) {
                    nav.$toggles(cb);
                }

            });
            console.log('test', _this.navs);
            return _this.navs;}

        _this.setNavOptions = function(nav) {
            _.forEach(_this.navProps[nav.type], function (property, name){
                nav.$toggles[name]
                nav.$toggles[name] = _this.createToggle(nav, property);
            });
            return nav;
        };

        _this.$get = function() {};
    }

}).call(this);
;(function(){

    'use strict';

    var required, navs, app;

        /* @ngInject */
        function mzNavApi(MZ_TopProvider, MZ_RightProvider, MZ_BottomProvider, MZ_LeftProvider){

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

    angular
        .module('ui.materialize.nav.api', [

            'ui.materialize.api.nav.top',
            'ui.materialize.api.nav.right',
            'ui.materialize.api.nav.bottom',
            'ui.materialize.api.nav.left'
        ])
        .provider('mzNavApi', mzNavApi)
        // .config(decorate)

}).call(this);
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
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

;;(function() {

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

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
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
        .module('ui.materialize')
        .service('$mzConfig', mzConfig)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }

    function mzConfig($q) {


    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize')
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
        .module('ui.materialize')
        .controller('mzController', mzController)

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
        .module('ui.materialize')
        .directive('mzMaterialize', mzMaterialize)
        .run(mzRunner)

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
        .module('ui.materialize')
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
        .module('ui.materialize.nav')
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
        .module('ui.materialize.nav')
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
        .module('ui.materialize.nav')
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
        .module('ui.materialize.nav')
        .directive('navAction', navAction)

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

    // angular
    //     .module('ui.materialize.nav')
    //     .directive('mzNavContainer', mzNavContainer)
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
        .module('ui.materialize.nav')
        // .animation( '.mz-left-open', leftOpen )

    /* @ngInject */
    function leftOpen($animate) {
        return {
            addClass: function(element, className) {
                console.log(className);
            }
        }
    }

}).call(this);

/*


<!-- <ul id="slide-out" class="">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li>
                <div class="collapsible-header">Dropdown<i class="mdi-navigation-arrow-drop-down"></i></div>
                <div class="collapsible-body">
                  <ul>
                    <li><a href="#!">First Dropdown Link</a></li>
                    <li><a href="#!">Second Dropdown Link</a></li>
                    <li><a href="#!">Third Dropdown Link</a></li>
                    <li><a href="#!">Fourth Dropdown Link</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul> -->
 */
;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge)
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
        .module('ui.materialize.nav')
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

// ;(function() {

//     'use strict';

//     angular
//         .module('ui.materialize.nav')
//         .service('rightNavService', rightNavService)

//     /* @ngInject */
//     function rightNavService(){
//         var that_ = this;

//         this.defaults = ['fixed', 'medium', 'open', 'fold'];

//         this.enable = function(config){
//             // _.assign(this, config);
//             this.configure(config);
//         }

//         /**
//          * Activated form the mzController passing the directive element
//          * @param  {Object} element Directive element
//          */
//         this.activate = function (element) {

//             this.$element = element;
//             this.$element.addClass(this.class);
//             this.$element.addClass(this.classList);

//             // console.log(this);

//         };

//         /**
//          * Wacth
//          * @Watch for events on the model.
//          */
//         this.watch = function() {
//             this.parent.$watchCollection('$navs.right', function(val, params, p, ppp) {
//                 // console.log(that_.scope);
//             });
//         };

//         *
//          * Configure
//          * @Configure classes for use in the directive.

//         this.configure = function(config) {

//               this.classList = config.class;
//               if (config.open) {
//                 this[config.open.scope] = config.open.default;
//                 if(this[config.open.scope]){
//                     this.classList += ' '+config.open.class;
//                 }
//               }
//               if (config.fold) {
//                 this[config.fold.scope] = config.fold.default;
//                 if(this[config.fold.scope]){
//                     this.classList += ' '+config.fold.class;
//                 }
//               }
//               if (config.medium) {
//                 this[config.medium.scope] = config.medium.default;
//                 if(this[config.medium.scope]){

//                     this.classList += ' '+config.medium.class;
//                 }
//               }
//               if (config.fixed) {
//                 this[config.fixed.scope] = config.fixed.default;
//                 if(this[config.fixed.scope]){
//                     this.classList += ' '+config.fixed.class;
//                 }
//               }
//         }
//     }

// }).call(this);

;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .service('bottomNavService', bottomNavService)

    /* @ngInject */
    function bottomNavService(){

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
        .module('ui.materialize.nav')
        .service('leftNavService', leftNavService)

    /* @ngInject */
    function leftNavService(){

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
        .module('ui.materialize.nav')
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
        .module('ui.materialize.nav')
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

;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav')
        .service('$TopNavigationService', TopNavigationService);

    /* @ngInject */
    function TopNavigationService($NavService) {
        var TopNavigation, defaults;


        TopNavigation = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

        };

        TopNavigation.prototype = _.create($NavService.prototype, {'constructor':TopNavigation})

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.activate = function() {
            this.resetClassList();
            // this.onOpen = this.addEventListener('open', this.open);
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.expand = function(value, classList) {
            console.log(this)
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.collapse = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.hide = function(value, classList) {
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.show = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':unfold');
        };

        return TopNavigation;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);

;(function(){

  'use strict';



    // function Canvas(){
    //     this.canvas;
    //     this.ctx
    //     this.x
    //     this.y
    //     window.addevent
    //     this.location = {};
    // }


    // Canvas.prototype.resize = function(){
    //     this.canvas
    // }





    // var c = new Canvas()

    // c.resize()
    // c.draw()



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
        .filter('uiMaterializeFilter', uiMaterializeFilter);

    /* @ngInject */
    function uiMaterializeFilter() {}

}).call(this);
;(function() {
    'use strict';

    angular
        .module('ui.materialize')
        .factory( 'SideBarClass', SideBarClass )

    /* @ngInject */
    function SideBarClass($animate, TweenMax, TimelineLight, Cubic) {
        return function() {
            var inEffect        = effect.enter,
            outEffect       = effect.leave,
            outEffectLeave  = effect.inverse || effect.leave,
            fx_type         = effect.animation;
            this.addClass = function(element, className, done){
                // if(className){
                //   // var options = Assist.parseClassList(element);
                //   options.motion = 'enter';
                //   options.animation = fx_type;
                //   options.timeoutKey = timeoutKey;
                //   Assist.addTimer(options, element, done);
                //   TweenMax.to(element, options.duration, outEffectLeave);
                //   return function (canceled){
                //     if(canceled){
                //       var timer = element.data(timeoutKey);
                //       if(timer){
                //         Assist.removeTimer(element, timeoutKey, timer);
                //       }
                //     }
                //   };
                // } else {
                //   done();
                // }
              };
        }

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

    var required, navs, app;

    angular
        .module('ui.materialize.api.nav.bottom', [])
        .provider('MZ_Bottom', MZ_Bottom)

        /* @ngInject */
        function MZ_Bottom () {

            var _this    = this;


            function mz_bottom(){

            }


            mz_bottom.prototype.new    = noob
            mz_bottom.prototype.add    = add
            mz_bottom.prototype.media  = media
            mz_bottom.prototype.style  = style
            mz_bottom.prototype.method = method

             /////
            //////////////////////////////
            //////////////////////////////////////////////////////
            this.$get = function($injector) {
                return mz_bottom;
            }
            //////////////////////////////////////////////////////
            //////////////////////////////
            // console.log(_this.navs);

            function noob(options) {
                if (options.inherit) {
                    _Nav.$mzNav[this.name] = this;
                }

                _Nav.$mzNav[this.name] = this;
                return this;
            };
            function add(options) {
                _.extend(this.globals$, options);
                return this;
            };

            function style(options) {
                _.extend(this.size$, options);
                    return this;
            };
            function method(options) {
                _.extend(this.method$, options);
                    return this;
            };
            function media(options) {
                _.extend(this.media$, options);
                    return this;
            };
        }


}).call(this);
;(function() {

    'use strict';

    var required, navs, app;

    angular
        .module('ui.materialize.api.nav.left', [])
        .provider('MZ_Left', MZ_Left)

        /* @ngInject */
        function MZ_Left () {

            var _this    = this;


            function mz_left(){

            }


            mz_left.prototype.new    = noob
            mz_left.prototype.add    = add
            mz_left.prototype.media  = media
            mz_left.prototype.style  = style
            mz_left.prototype.method = method

             /////
            //////////////////////////////
            //////////////////////////////////////////////////////
            this.$get = function($injector) {
                return mz_left;
            }
            //////////////////////////////////////////////////////
            //////////////////////////////
            // console.log(_this.navs);

            function noob(options) {
                if (options.inherit) {
                    _Nav.$mzNav[this.name] = this;
                }

                _Nav.$mzNav[this.name] = this;
                return this;
            };
            function add(options) {
                _.extend(this.globals$, options);
                return this;
            };

            function style(options) {
                _.extend(this.size$, options);
                    return this;
            };
            function method(options) {
                _.extend(this.method$, options);
                    return this;
            };
            function media(options) {
                _.extend(this.media$, options);
                    return this;
            };
        }


}).call(this);
;(function() {

    'use strict';

    var required, navs, app;

    angular
        .module('ui.materialize.api.nav.right', [])
        .provider('MZ_Right', MZ_Right)

        /* @ngInject */
        function MZ_Right () {

            var _this    = this;


            function mz_right(){
            }
            mz_right.prototype.new    = noob
            mz_right.prototype.add    = add
            mz_right.prototype.media  = media
            mz_right.prototype.style  = style
            mz_right.prototype.method = method

             /////
            //////////////////////////////
            //////////////////////////////////////////////////////
            this.$get = function($injector) {
                return mz_right;
            }
            //////////////////////////////////////////////////////
            //////////////////////////////
            // console.log(_this.navs);

            function noob(options) {
                if (options.inherit) {
                    _Nav.$mzNav[this.name] = this;
                }

                _Nav.$mzNav[this.name] = this;
                return this;
            };
            function add(options) {
                _.extend(this.globals$, options);
                return this;
            };

            function style(options) {
                _.extend(this.size$, options);
                    return this;
            };
            function method(options) {
                _.extend(this.method$, options);
                    return this;
            };
            function media(options) {
                _.extend(this.media$, options);
                    return this;
            };
        }


}).call(this);
;(function() {

    'use strict';

    var required, navs, app;

    angular
        .module('ui.materialize.api.nav.top', [])
        .provider('MZ_Top', MZ_Top)

        /* @ngInject */
        function MZ_Top () {


            var _this    = this;
            var mz_top;


            this.new    = noob
            this.add    = add
            this.media  = media
            this.style  = style
            this.method = method


             /////
            //////////////////////////////
            //////////////////////////////////////////////////////
            this.$get = function($injector) {
                console.log(_this.service)
                return mz_top;
            }
            //////////////////////////////////////////////////////
            //////////////////////////////
            // console.log(_this.navs);


            function noob(options) {
                console.log(this);
                if (options.inherit) {
                    _Nav.$mzNav[this.name] = this;
                }

                _Nav.$mzNav[this.name] = this;
                return this;
            };
            function add(options) {
                _.extend(this.globals$, options);
                return this;
            };

            function style(options) {
                _.extend(this.size$, options);
                    return this;
            };
            function method(options) {
                _.extend(this.method$, options);
                    return this;
            };
            function media(options) {
                _.extend(this.media$, options);
                    return this;
            };
        }


}).call(this);