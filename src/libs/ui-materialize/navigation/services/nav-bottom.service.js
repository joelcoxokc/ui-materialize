;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .service('bottomNavService', bottomNavService)

    /* @ngInject */
    function bottomNavService(){

        this.activate = function(scope) {
            this.scope = scope;

        };
        this.watch = function() {
            // this.scope.$watchCollection('open', function() {

            // });
        }
    }

}).call(this);