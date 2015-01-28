;( function() { 'use strict';

    angular.module('components')
         .config(componentsConfig)
         ;

    /* @ngInject */
    function componentsConfig($stateProvider) {
        $stateProvider
            .state('app.components-buttons',
                  { url     : '/components/buttons'
                  , resolve : {resolveUsers:users}
                  , views   :
                          { '@' :
                              { controller: 'ComponentsController as vm'
                              , templatUrl: 'views/buttons.view.html'
                              }
                           }
                  })
            .state('app.components-collections',
                  { url     : '/components/collections'
                  , resolve : {resolveUsers:users}
                  , views   :
                          { '@' :
                              { controller: 'ComponentsController as vm'
                              , templatUrl: 'views/collections.view.html'
                              }
                          }
                  })
            ;

        /*  @ngInject */
        function users(User) {
            return User.all().then( function(response){return response.data;} );   }
          }
  }).call(this);
