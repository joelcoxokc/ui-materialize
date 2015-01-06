;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .config(gettingStartedConfig);

    /* @ngInject */
    function gettingStartedConfig($stateProvider) {
        $stateProvider
            .state('gettingStarted', {
                url:'/gettingStarted',
                mzNav:{
                    background:'white',
                    links:'orange-text'
                },
                views:{
                    '@': {
                        templateUrl:'app/modules/gettingStarted/views/gettingStarted.view.html',
                        controller:'gettingStartedController as vm',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',
                    }
                }

            });
    }

}).call(this);