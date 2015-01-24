;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav')
        .service('$TopNavigationService', TopNavigationService);

    /* @ngInject */
    function TopNavigationService($NavService) {
        var TopNavigation, defaults;


        TopNavigation = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

        };

        TopNavigation.prototype = _.create($NavService.prototype, {'constructor':TopNavigation})

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.activate = function() {
            this.resetClassList();
            // this.onOpen = this.addEventListener('open', this.open);
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.expand = function(value, classList) {
            console.log(this)
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.collapse = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.hide = function(value, classList) {
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        TopNavigation.prototype.show = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':unfold');
        };

        return TopNavigation;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);
