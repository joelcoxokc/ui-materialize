;(function() { 'use strict';

    angular
        .module('mz.components.table', [])
        .directive('mzTable', mzTable)
        ;

    /* @inject */
    function mzTable() {
        return  { template   : '<table class="mz-table" data-ng-transclude></table>'
                , restrict   : 'E'
                , scope      : true
                , replace    : true
                , transclude : true
                , link       : function link(scope, element, attrs) {}
                }; // templateUrl: 'templates/mzTable.view.html',
      }

  }).call(this);
