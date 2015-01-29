;(function() { 'use strict';

    angular
      .module('components')
      .config(components)
      ;

      function components($stateProvider) {

        var state = $stateProvider.state

        _.forEach(getComponents(), function (component) {
            state('app.components-'+component,
                { url   : '/components/'+component
                , views : { '@' :
                              {templateUrl : 'app/modules/components/views/'+component+'.html'  }
                          }
                });
          });
          function getComponents() {
              return [ 'buttons'
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
                ];
            }
        }

  }).call(this);