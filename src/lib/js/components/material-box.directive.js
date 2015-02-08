;(function() { 'use strict';
    angular
        .module('mz.components.material-box', [])
        .directive('mzMaterialBox', mzMaterialBox)
        ;

    /* @inject */
    function mzMaterialBox($document) {
        return  { replace    : true
                , restrict   : 'E'
                , link       : link
                };
        function link(scope, element, attrs) {
           $('.materialboxed').materialbox();
           $(document).ready(function(){
               $('.materialboxed').materialbox();
             });
          }
      }

  }).call(this);
