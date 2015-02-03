;(function() { 'use strict';
    var required, navs, app;

    angular
        .module('ui.materialize.api.nav.left', [])
        .provider('MZ_Left', MZ_Left)
        ;

    /* @ngInject */
    function MZ_Left () {
        var _this = this;

        function mz_left() {}
        mz_left.prototype.new    = noob;
        mz_left.prototype.add    = add;
        mz_left.prototype.media  = media;
        mz_left.prototype.style  = style;
        mz_left.prototype.method = method;

        this.$get = function($injector) { return mz_left; };

        function noob(options) {
            options.inherit) &&(  _Nav.$mzNav[this.name] = this  );
            return (  _Nav.$mzNav[this.name] = this  );   }
        function add    (options) {  _.extend(this.globals$, options);  return this;  };
        function style  (options) {  _.extend(this.size$   , options);  return this;  };
        function method (options) {  _.extend(this.method$ , options);  return this;  };
        function media  (options) {  _.extend(this.media$  , options);  return this;  };

      } // end function MZ_Left
  }).call(this);
