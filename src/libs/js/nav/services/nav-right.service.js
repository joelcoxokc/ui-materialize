;(function() {
    'use strict';

    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', RightNavigationService);

    /* @ngInject */
    function RightNavigationService($NavService) {
        var RightNavigation, defaults;


        RightNavigation = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

        };

        RightNavigation.prototype = _.create($NavService.prototype, {'constructor':RightNavigation})

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.activate = function() {
            this.resetClassList();
            this.startWatch();
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.open = function() {

            this.element.addClass(this.classes.open);
            if (this.config.fold) {
                this.unfold()
            }
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.close = function() {
            this.element.removeClass(this.classes.open);
            if (this.config.fold) {
                this.fold();
            }
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.fold = function() {
            this.element.addClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.unfold = function(value, classList) {
            this.element.removeClass(this.classes.fold);
            this.broadcast('nav:'+this.side+':unfold');
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.startWatch = function(value, classList) {
            this.watch('isOpen', function (value) {
                // console.log('test');
                if (value) {
                    this.open();
                } else {
                    this.close();
                }
            });
        };

        ////////////////////////
        ///
        ///
        RightNavigation.prototype.useLargeAction = function() {
            this.addClass('has-large-action');
        }

        return RightNavigation;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);
