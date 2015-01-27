;(function() {'use strict';

    angular
        .module('stylus')
        .config(stylusConfig)
        ;

    /* @ngInject */
    function stylusConfig($stateProvider) {
        $stateProvider
            .state( 'stylus',
                { url          :  '/stylus'
                , controller   :  'stylusController as vm'
                , templateUrl  :  'app/modules/stylus/views/stylus.view.html'
                } )
            .state( 'stylus-color',
                { url          :  '/stylus/color'
                , templateUrl  :  'app/modules/stylus/views/color.html'
                } )
            .state( 'stylus-grid',
                { url          :  '/stylus/grid'
                , templateUrl  :  'app/modules/stylus/views/grid.html'
                , controller   :  'GridController as vm'
                } )
            .state( 'stylus-shadow',
                { url          :   '/stylus/shadow'
                , templateUrl  :  'app/modules/stylus/views/shadow.html'
                } )
            .state( 'stylus-table',
                { url          :  '/stylus/table'
                , templateUrl  :  'app/modules/stylus/views/table.html'
                } )
            .state( 'stylus-typography',
                { url          :  '/stylus/typography'
                , templateUrl  :  'app/modules/stylus/views/typography.html'
                } )
            ;
      }

  }).call(this);
