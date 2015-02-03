;(function() { 'use strict';
    angular
        .module('gettingStarted')
        .config(gettingStartedConfig)
        ;

    /* @ngInject */
    function gettingStartedConfig($stateProvider) {
        $stateProvider
            .state('app.gettingStarted',
                { url   : '/gettingStarted'
                , mzNav : { background: 'white'
                          , links     : 'orange-text'
                          }
                , views:  { '@'  :
                              { templateUrl : 'app/modules/gettingStarted/views/gettingStarted.view.html'
                              , controller  : 'gettingStartedController as vm'
                              }
                          }
                });
      }

  }).call(this);
