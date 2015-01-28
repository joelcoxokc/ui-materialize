;(function() {'use strict';

    angular
        .module('stylus')
        .config(stylusConfig)
        ;

    /* @ngInject */
    function stylusConfig($stateProvider) {
        $stateProvider
            .state('app.stylus',
                  { url   : '/stylus'
                  , views : view('views/stylus.view.html', 'stylusController as vm')
                  } )
            .state('app.stylus-color',
                  { url   : '/stylus/color'
                  , views : view('views/color.html')
                  } )
            .state('app.stylus-grid',
                  { url   : '/stylus/grid'
                  , views : view('views/grid.html', 'GridController as vm')
                  } )
            .state('app.stylus-shadow',
                  { url   : '/stylus/shadow'
                  , views : view('views/shadow.html')
                  } )
            .state('app.stylus-table',
                  { url   :  '/stylus/table'
                  , views : view('views/table.html')
                  } )
            .state('app.stylus-typography',
                  { url   :  '/stylus/typography'
                  , views : view('views/typography.html')
                  } )
            ;

        function view(template, controller) {
            var tpl = {templateUrl:'app/modules/stylus/'+template}
            controller && (tpl.controller = controller)
            return {'@': tpl};
          }
    }

  }).call(this);
