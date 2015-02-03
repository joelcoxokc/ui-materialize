;(function() { 'use strict';

    function components($stateProvider) {
        var state = $stateProvider.state;
        _.forEach(
            [ 'buttons'
            , 'cards'
            , 'collapsible'
            , 'collections'
            , 'dialogs'
            , 'dropdowns'
            , 'forms'
            , 'media'
            , 'modals'
            , 'notifications'
            , 'progress'
            , 'select'
            , 'tabs'
            , 'tooltips'
            ] , function (component) {
                    state( 'app.components-'+component
                         , { url   :
                              '/components/'+component
                           , views :
                              { '@' :
                                { templateUrl : 'app/modules/components/views/'+component+'.html'
                                , controller  : 'ComponentsController as vm'
                                }
                              }
                           }
                         ); // end function call state();
                  } // end anonymous function (component) {...}
            ); // end function call _.forEach(...);
      } // end function components(){...}
  }).call(this);
