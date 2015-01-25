;(function() {
    'use strict';

    angular.module('ui.materialize', [
        'ngAnimate',
        // 'ui.materialize.api',
        'ui.materialize.core',
        'ui.materialize.nav',
        'ui.materialize.layout',
        'ui.materialize.components',
    ])
    .run(Run)

    /* @ngInject */
    function Run($rootScope) {

    }

}).call(this);