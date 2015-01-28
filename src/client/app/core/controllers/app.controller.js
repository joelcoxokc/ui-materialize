;(function() { 'use strict';

    angular
        .module('core')
        .controller('AppController', AppController)
        ;

    /* @ngInject */
    function AppController($scope, $storage, TweenMax, Cubic) {

        // console.log(mzNavApi)
        // console.log(EventDispatcher);
        // this.right = $Navigation.navs.right;
        // console.log(this.right.$toggles.open())
        // console.log($Navigation.navs.right)



        jQuery(document).ready(function() {
            $('.collapsible').collapsible();
        })
    }

}).call(this);
