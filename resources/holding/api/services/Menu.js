;(function(){ 'use strict';

    angular
        .module('ui.materialize.api')
        .provider('$Menu', $Menu)
        ;

        function $Menu() {
            var _this = this;
            this._menus = {};

            // Initialize this api
            this.$get = function(){ return {}; };
            this.addMenu = function(menu) { this._menus[menuId] = menu; };
            this.removeMenu = function(menuId) {  var ret = this.menus[menuId];  delete ret;   return ret;  };
            this.getMenu    = function(menuId) {  return this.menus[menuId] || (void 0);  };
            this.updateMenu = function(menu)   {  this.menus[menu.menuId] &&( this.menus[menuId] = menu );  };
            // this.toggleMenu = function(menu){  this.menus[menu.menuId]) && ();  };
            this.isMenu = function(menu)       {  return !!this.menus[menu.Id];  };

         }

  }).call(this);
