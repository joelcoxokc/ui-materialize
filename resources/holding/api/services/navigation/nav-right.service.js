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