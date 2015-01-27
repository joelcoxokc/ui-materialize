;(function() { 'use strict';

    angular
        .module('layout')
        .config(layoutConfig)
        ;

    /* @ngInject */
    function layoutConfig($stateProvider) {
        $stateProvider
            .state('layout',
                { url         : '/layout'
                , templateUrl : 'app/modules/layout/views/layout.view.html'
                }  );   }

  }).call(this);
