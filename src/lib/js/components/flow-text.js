;(function() {'use-strict';
    angular
      .module('mz.components.flow-text', [])
      .directive('flowText', flowText)
      ;

    function flowText() {
        return function (scope, element, attrs) { element.addClass('flow-text'); };
      }

  }).call(this)
