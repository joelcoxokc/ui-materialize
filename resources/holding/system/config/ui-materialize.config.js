;(function() { 'use strict';
    angular
        .module('ui.materialize')
        .config(uiMaterializeConfig)
        .run( uiMaterializeRun )
        ;

    /* @ngInject */
    function uiMaterializeRun($rootScope) {
        $rootScope.$mzNav = { background:'white' , logo:'orange' , links:'orange-text' , fixed:true };  // default values
        $rootScope.$on('$stateChangeStart', function (event, state) {
            state.mvNav &&( _.assign($rootScope.$mzNav, state.mzNav); );   });

        /**
         * isNavFixed
         * Check whether the navbar is fixed
         * @return {Boolean} boolean switch.
         */

        $rootScope.$mzNavReset = function() { $rootScope.$mzNav = mvNavDefaults; };
      }

    /* @ngInject */
    function uiMaterializeConfig() {}

  }).call(this);
