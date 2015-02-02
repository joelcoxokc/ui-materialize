;(function() { 'use strict';

    angular
        .module('mz.components.services.notification', [])
        .provider('mzNotificationService', mzNotificationService)
        ;

    /* @ngAnotate */
    function mzNotificationService() {
        // var _this = this;
        this.init = function(element) { this.element = element; };

        this.$get = function($injector) {
            function Notifications() { /* var _this = this; */ }
            Notifications.prototype.enable = function() {};
            return $injector.instantiate(Notifications);
          }

      }

  }).call(this);
