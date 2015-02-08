;(function() { 'use strict';
    angular
        .module('mz.components.modal', [])
        .directive('mzModal', mzModal)
        .directive('mzToggleModal', mzToggleModal)
        ;

    /* @inject */
    function mzModal($ModalService) {
        return  { templateUrl : 'components/modal.html'
                , restrict    : 'E'
                , scope       : true
                , replace     : true
                , transclude  : true
                , link        : link
                };

        function link(scope, element, attrs, ctrl) {
            if (!attrs.id) return console.error('mzModalDirective requires a unique Id attribute');
              /*==================================*/}

      }

    /* @inject */
    function mzToggleModal($ModalService) {
        return  { restrict   : 'A'
                , link       : link
                };
        function link(scope, element, attrs) {
            var toggle = attrs.toggle || attrs.mzToggleModal;
            if (!toggle) return console.error('mzToggleModal requires a toggle attribute in order to toggle the correct modal');

            $(document).ready(function(){
                element.on('click', function(){
                    $(toggle).openModal();
                  });
              });

            /*==============================*/}
      }

  }).call(this);
