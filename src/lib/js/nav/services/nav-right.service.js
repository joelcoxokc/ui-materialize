;(function() { 'use strict';

    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', RightNavigationService)
        ;

    /* @ngInject */
    function RightNavigationService($NavService) {
        var RightNavigation // FIXME: Is this that weird interplay behavior with var and function hoisting?
  
        RightNavigation.prototype = _.create($NavService.prototype, {'constructor':RightNavigation});
        RightNavigation.prototype.activate       = protoActivate;
        RightNavigation.prototype.open           = protoOpen;
        RightNavigation.prototype.close          = protoClose;
        RightNavigation.prototype.fold           = protoFold;
        RightNavigation.prototype.unfold         = protoUnfold;
        RightNavigation.prototype.startWatch     = protoStartWatch;
        RightNavigation.prototype.useLargeAction = protoUseLargeAction;

        return RightNavigation;

        function RightNavigation(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;
        };

        function protoActivate() {
            var _this = this;
            this.startWatch();
            _.forEach(this.classes, function (className) {
                _this.element.addClass(className)
            });
        };

        function protoOpen() {

            this.element.addClass(this.classes.open);
            if (this.config.fold) {
                this.unfold()
            }
            this.broadcast('nav:'+this.side+':opened');
        };

        function protoClose() {
            this.element.removeClass(this.classes.open);
            if (this.config.fold) {
                this.fold();
            }
            this.broadcast('nav:'+this.side+':closed');
        };

        function protoFold() {
            this.element.addClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':folded');
        };

        function protoUnfold(value, classList) {
            this.element.removeClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':unfold');
        };

        function protoStartWatch(value, classList) {
            this.watch('isOpen', function (value) {
                // console.log('test');
                if (value) {
                    this.open();
                } else {
                    this.close();
                }
            });
        };

        function protoUseLargeAction() {
            this.element.addClass('has-large-action');
        }

        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);
