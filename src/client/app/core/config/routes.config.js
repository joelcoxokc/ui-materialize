/* global _:false */
;(function() { 'use strict';
    angular
        .module('core')
        .config(Core)
        ;

    /* @ngInject */
    function Core ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/app/home');

        $stateProvider
            .state('app',
                { url   : '/app'
                , views : { 'nav'   :
                              {templateUrl : 'app/core/views/header.view.html' }
                          , 'right' :
                              {templateUrl : 'app/core/views/right.view.html' }
                          , 'footer':
                              {templateUrl : 'app/core/views/footer.view.html' }
                          }
                })
            .state('app.home',
                { url   : '/home'
                , views : { '@' :
                            {templateUrl : 'app/core/views/home.view.html'   }
                          }
                })
            ;
      }
}).call(this);


