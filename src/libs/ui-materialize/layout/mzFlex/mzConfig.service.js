;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .service('$mzConfig', mzConfig)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }

    function mzConfig($q) {


    }

}).call(this);
