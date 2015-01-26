;( function() { 'use strict';
    angular.module('components')
         .config(componentsConfig)
         ;

    /* @ngInject */
    function componentsConfig($stateProvider) {
        $stateProvider

            .state('components', {
                url    : '/components'          ,
                resolve: { resolveUsers:users  },
                views  : {
                      '@'     : {  templateUrl:'app/modules/components/views/components.view.html',
                                   controller:'ComponentsController as vm'                        } ,
                      'nav'   : {  templateUrl:'app/core/views/header.view.html'                  } ,
                      'footer': {  templateUrl:'app/core/views/footer.view.html'                  } } }
                )
            ;

        /*  @ngInject */
        function users(User) {
            return (
                User.all().then( function(response){return response.data;} ) );
            }

        }
    }).call(this);