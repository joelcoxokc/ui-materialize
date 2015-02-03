;(function() { 'use strict';
    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody)
        ;

    /* @inject */
    function mzBody() {
        return  { templateUrl : 'layout/body.template.html'
                , require     : '^mzMaterialize'
                , restrict    : 'E'
                , transclude  : true
                , replace     : true
                , scope       : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) { ctrl.body = element; }
      }

  }).call(this);
