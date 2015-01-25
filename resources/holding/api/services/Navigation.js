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