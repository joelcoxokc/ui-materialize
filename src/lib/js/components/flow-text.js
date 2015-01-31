;(function() {'use-strict';

    angular
      .module('core')
      .directive('flowText', flowText)
      ;

    function flowToggle() {
        return function (scope, element, attrs) {
            element.addClass('flow-text');
          }
      }

  }).call(this)
