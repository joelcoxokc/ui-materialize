;( function() { 'use strict';
    angular.module('components')
         .config(componentsConfig)
         ;

    /* @ngInject */
    function componentsConfig($stateProvider) {
        $stateProvider


            .state('app.components-buttons',
                  { url    : '/components/buttons'
                  , views  : view('views/buttons.view.html', 'ComponentsController as vm')
                  })


            .state('app.components-collections',
                  { url    : '/components/collections'
                  , resolve: {resolveUsers:users}
                  , views  : view('views/collections.view.html', 'ComponentsController as vm')
                  })
        ///////////////////


        /*  @ngInject */
        function users(User) {
            return (
                User.all().then( function(response){return response.data;} ) );
            }

        }

        function view(template, controller) {
            var tpl = {templateUrl:'app/modules/components/'+template}
            controller && (tpl.controller = controller)
            return {'@': tpl};
        }
    }).call(this);