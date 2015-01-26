;(function() {

    'use strict';

    angular
        .module('mz.components.controllers.notification', [])
        .controller('mzNotificationController', mzNotificationController);

    /* @ngAnotate */
    function mzNotificationController($scope) {

        var _this = this;

        this.init = function(element) {
            this.element = element;
        };
    }

}).call(this);
