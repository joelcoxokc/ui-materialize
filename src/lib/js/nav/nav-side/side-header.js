;(function() { 'use strict';

    angular
        .module('mz.nav.side.header', [])
        .directive('sideHeader', sideHeader)
        .directive('headerActionHuge', headerActionHuge)
        ;

    /* @ngInject */
    function sideHeader() {
        return { templateUrl : 'nav/side-header.html'
               , restrict    : 'EA'
               , scope       : true
               , replace     : true
               , transclude  : true
               , link        : link
        };
        function link(scope, element, attrs, ctrl, transclude) {}
    }

    /* @ngInject */
    function headerActionHuge() {
        return { require  : '^mzMaterialize'
               , restrict : 'A'
               , link     : link
        };
        function link(scope, element, attrs, ctrl) {
            jQuery(document).ready(function() {
                $('.nav-right .side-header').addClass('has-large-action');
            })
        }
    }




}).call(this);
