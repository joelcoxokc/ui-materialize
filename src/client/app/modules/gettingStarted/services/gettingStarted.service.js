;function() { 'use strict';
    angular
        .module('gettingStarted')
        .service('gettingStartedService', gettingStartedService)
        .factory('gettingStartedFactory', gettingStartedFactory);

    /* @ngInject */
    function gettingStartedService() {}

    /* @ngInject */
    function gettingStartedFactory() {}

}).call(this);