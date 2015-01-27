;function() { 'use strict';
    angular
        .module('navigation')
        .filter('navigationFilter', navigationFilter);

    /* @ngInject */
    function navigationFilter() {}

}).call(this);