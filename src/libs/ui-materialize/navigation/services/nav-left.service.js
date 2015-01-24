;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .service('leftNavService', leftNavService)

    /* @ngInject */
    function leftNavService(){

        var that_ = this;
        return function Left() {

            this.activate = function(scope, element, attrs) {
                this.scope   = scope;
                this.attrs   = attrs;
                this.element = element;
                this.side    = 'left';

                this.classList = 'nav-left';

                this.scope.isOpen   = attrs.open  || true;
                this.scope.isFixed  = attrs.fixed || false;
                this.scope.isFolded = attrs.fold  || true;

                this.watch('isOpen',   this.open, this.close, 'open');
                this.watch('isFixed',  this.fix,  this.unfix, 'fixed');
                this.watch('isFolded', this.fold, this.unfold, 'fold');
            };

            this.fix = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':fixed');
            };

            this.unfix = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':unfixed');
            };

            this.open = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':opened');
            };

            this.close = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':closed');
            };

            this.fold = function(value, classList) {
                this.element.addClass(classList);
                this.broadcast('nav:'+this.side+':folded');
            };

            this.unfold = function(value, classList) {
                this.element.removeClass(classList);
                this.broadcast('nav:'+this.side+':unfold');
            };

            this.watch = function(key, succes, fail, classList) {

                this.scope.$watch(key, function(value) {
                    if (key) {
                        succes(value, useClass(classList));
                    } else {
                        fail(value, useClass(classList));
                    }
                });
            };
            this.broadcast = function(msg, data) {
                this.scope.$broadcast(msg, data);
            };
            this.emit = function(msg, data) {
                this.scope.$emit(msg, data);
            };
        }
        //////////////////////////

        function useClass(value) {
            return that_.classList + '-' +value;
        }


    }

}).call(this);
