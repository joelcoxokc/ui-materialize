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