;(function() {
    'use strict';

    angular
        .module('mz.nav.services.bar', [])
        .service('$NavBarService', NavBarService);

    /* @ngInject */
    function NavBarService($NavService) {
        var NavBar, defaults;


        NavBar = function(side, element, attrs, config) {
            $NavService.apply(this, arguments);
            var self = this;

        };

        NavBar.prototype = _.create($NavService.prototype, {'constructor':NavBar})

        ////////////////////////
        ///
        ///
        NavBar.prototype.activate = function() {
            this.resetClassList();
            // this.onOpen = this.addEventListener('open', this.open);
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.expand = function(value, classList) {
            console.log(this)
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':opened');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.collapse = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':closed');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.hide = function(value, classList) {
            this.element.addClass(classList);
            this.broadcast('nav:'+this.side+':folded');
        };

        ////////////////////////
        ///
        ///
        NavBar.prototype.show = function(value, classList) {
            this.element.removeClass(classList);
            this.broadcast('nav:'+this.side+':unfold');
        };

        return NavBar;


        //////////////////////
        /// service helpers


        function createClass(side) {
            return 'nav-' + side;
        }

    }


}).call(this);
