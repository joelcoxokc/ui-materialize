;(function() { 'use strict';

    angular
        .module('mz.components.button', [])
        .directive('mzBtn', mzBtn)
        ;

    /* @inject */
    function mzBtn() {
        return { template   : '<a><i data-ng-if="icon" data-ng-class="icon"></i></a>'
               , restrict   : 'E'
               , replace    : true
               , scope      : {icon:'@'}
               , link       : link
               , transclude : true
               };
        function link(scope, element, attrs, ctrl, transclude) {
            $(document).ready(function() {
                element.addClass('mz-btn btn');
                var type = 'btn-';
                attrs.type ? (type += attrs.type) : (type += 'raised');
                element.addClass(type);

                transclude(scope, function (clone) {element.append(clone); });

              });

          }
      }

  }).call(this);
