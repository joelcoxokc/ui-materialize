;(function() { 'use strict';
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