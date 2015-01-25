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