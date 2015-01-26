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

          }; // end Navigation function

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


        } // end NavService function

    }).call(this);
