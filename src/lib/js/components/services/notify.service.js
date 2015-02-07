;(function() { 'use strict';
    angular
        .module('mz.components.services.notify', [])
        .provider('$mzNotify', mzNotify)
        .constant('toastr', toastr);
        ;

    /* @ngAnotate */
    function mzNotify(toastr) {
        var _this = this;

        var defaults =  { 'closeButton': true
                        , 'positionClass': 'toast-bottom-right'
                        , 'timeOut': '3000'
                        }

        this.config = function(params) {
          if(params && !angular.isObject(params)) {
            return console.error('mzNotifyService requires an Object as a parameter');
          }
          angular.extend(defaults, params);
        };
        this.$get = function($injector) {
            function Notify() {
              this.options = defaults;
            }
            angular.extend(Notify.prototype, toastr);
            return $injector.instantiate(Notify);
          }
      }

  }).call(this);

// ;(function() {
// 'use strict';
//   angular
//     .module('core')
//     .factory('logger', logger);
//     function logger() {
//       var logIt;
//       toastr.options = {
//         'closeButton': true,
//         'positionClass': 'toast-bottom-right',
//         'timeOut': '3000'
//       };
//       logIt = function(message, type) {
//         return toastr[type](message);
//       };
//       return {
//         log: function(message) {
//           logIt(message, 'info');
//         },
//         logWarning: function(message) {
//           logIt(message, 'warning');
//         },
//         logSuccess: function(message) {
//           logIt(message, 'success');
//         },
//         logError: function(message) {
//           logIt(message, 'error');
//         }
//       };
//     }
// }).call(this);