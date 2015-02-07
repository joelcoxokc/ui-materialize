;(function() { 'use strict';
    angular
      .module('mz.components.notify', [])
      .directive('mzNotifySuccess', mzNotifySuccess)
      .directive('mzNotifyWarning', mzNotifyWarning)
      .directive('mzNotifyError', mzNotifyError)
      .directive('mzNotifyInfo', mzNotifyInfo)
      ;

    /* @ngInject */
    function mzNotifySuccess($mzNotify){

        return new mzNotify('success', $mzNotify, 'mzNotifySuccess');
      }
    /* @ngInject */
    function mzNotifyWarning($mzNotify){

        return new mzNotify('warning', $mzNotify, 'mzNotifyWarning');
      }
    /* @ngInject */
    function mzNotifyError($mzNotify){

        return new mzNotify('error', $mzNotify, 'mzNotifyError');
      }
    /* @ngInject */
    function mzNotifyInfo($mzNotify){

        return new mzNotify('info', $mzNotify, 'mzNotifyInfo');
      }

    /* @inject */
    function mzNotify(type, $Notify, attrName) {
        this.restrict = 'A';
        this.link = function link(scope, element, attrs) {
            element.on('click', function() {
                attrs[attrName] && $Notify[type](attrs[attrName]);
                attrs.notifyMessage && $Notify[type](attrs.notifyMessage);
              });
          };
      }


  }).call(this);
