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
