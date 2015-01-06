/* global _:false */
;(function() {
    'use strict';

    angular
        .module('core')
        .config(Core)
        .run(runner);

    /* @ngInject */
    function runner($rootScope) {

    }

    /* @ngInject */
    function Core ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                mzNav:{
                    background:'white',
                    links:'pink-text'
                },
                views: {
                    '@':{
                        templateUrl: 'app/core/views/home.view.html',
                        controller:  'HomeController as vm',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',
                    },
                    'footer':{
                        templateUrl: 'app/core/views/footer.view.html',
                    }
                }
            })
            .state('grid', {
                url: '/grid',
                mzNav:{
                    background:'white',
                    links:'pink-text'
                },
                views:{
                    '@':{
                        templateUrl: 'app/core/views/grid.view.html',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',

                    }
                }
            });

        ////////////////////////

    }

}).call(this);