;function() { 'use strict';
    angular
        .module('directives')
        .service('directivesService', directivesService)
        .factory('directivesFactory', directivesFactory);

    /* @ngInject */
    function directivesService() {}

    /* @ngInject */
    function directivesFactory() {}

}).call(this);