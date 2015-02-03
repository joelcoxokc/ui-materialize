;(function() { 'use strict';
    angular
        .module('mz.layout.view', [])
        .directive('mzView', mzView)
        ;

    /* @inject */
    function mzView() {
        return  { template : '<main class="mz-view"><ui-view class="mz-body col s12"></ui-view></main>'
                , restrict : 'E'
                , scope    : true
                , replace  : true
                , link     : function link(scope, element, attrs) {}
                };
      }

  }).call(this);
