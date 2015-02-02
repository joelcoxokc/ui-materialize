;(function() {'use-strict';

    angular
      .module('core')
      .directive('flowToggle', flowToggle)
      ;

    function flowToggle() {
        return function (scope, element, attrs) {
            element.on('click', function() {
                angular.forEach($('.flow-text-demo').find('p'), function(item){
                  console.log(item);
                    angular.element(item).toggleClass('flow-text');
                  });
            });
          }
      }

  }).call(this)
