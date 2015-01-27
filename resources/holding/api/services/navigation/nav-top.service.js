;(function() { 'use strict';
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