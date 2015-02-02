;(function (){'use strict'

    angular
        .module('mz.core.waves', [])
        // .directive('waves', waves)
        ;

    function waves() {
        return function (scope, element, attrs) {
            jQuery(document).ready(function() {
                element.addClass('waves-effect waves-'+attrs.waves);
              });
        }
    }

  }).call(this);