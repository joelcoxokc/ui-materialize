;function() { 'use strict';
    angular
        .module('layout')
        .filter('layoutFilter', layoutFilter);

    /* @ngInject */
    function layoutFilter() {}

}).call(this);