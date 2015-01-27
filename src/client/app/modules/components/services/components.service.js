;(function() { 'use strict';
    angular
        .module('components')
        .service('componentsService', componentsService)
        .factory('componentsFactory', componentsFactory);

    /* @ngInject */
    function componentsService() {}

    /* @ngInject */
    function componentsFactory() {}

}).call(this);