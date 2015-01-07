;(function() {

    'use strict';

    angular
        .module('core')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController($scope, $storage, TweenMax, Cubic) {
        jQuery(document).ready(function() {
             $('.collapsible').collapsible();
        })
    }

}).call(this);
