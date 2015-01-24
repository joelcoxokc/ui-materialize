;(function() {

    'use strict';

    angular
        .module('ui.materialize.nav')
        .directive('mzNavBrand', mzNavBrand);

    /*
        mzNavBrand
    ====================

        @sub-directive  |   mz-nav-brand
        @parent         |   mz-nav
        @description    |   directive for adding the logo brand to the top nav...
        @NOTE           |   replaced by an <a></a> element. all basic attributes apply
        @usage          |
                        |   <mz-nav>
                                <mz-nav-brand
                                    ui-sref= <state-name>
                                </mz-nav-brand>
                            </mz-nav>
    ===================*/
    /* @ngInject */
    function mzNavBrand() {
        return {
            template: '<a class=""></a>',
            restrict : 'E',
            require: '^mzMaterialize',
            scope: true,
            transclude: true,
            replace:true,
            link:link
        };
        /////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {

            element.addClass('mz-nav-brand brand-logo');

            transclude(scope, function (clone) {
                element.append(clone);
            });
        }
    }

}).call(this);