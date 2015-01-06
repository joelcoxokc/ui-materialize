/* global jQuery:false */
;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzTabs', mzTabs);

    /* @inject */
    function mzTabs() {
        return {
            template: '<div class="tabs-wrapper">'+
                            '<div class="row white z-depth-1 pin-top" style="top: 0px;">'+
                                '<div class="container">'+
                                    '<ul class="tabs" data-ng-transclude>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
            restrict: 'E',
            scope: true,
            transclude: true,
            link: link
        };
        // <li class="tab" ><a href="#tab1" class="">Typography</a></li>
        // <li class="tab" ><a href="#tab2" class="">Grid</a></li>
        // <li class="tab" ><a href="#tab4" class="active">Forms</a></li>
        // <li class="tab" ><a href="#tab5" class="">Buttons</a></li>
        // <li class="tab" ><a href="#tab6">Navbar</a></li>
        // <li class="tab" ><a href="#tab7">Content</a></li>

        ////////////////

        function link(scope, element, attrs) {

            jQuery(document).ready(function() {
                element.children().ready(function() {

                    $('ul.tabs').tabs();
                })
            });

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
