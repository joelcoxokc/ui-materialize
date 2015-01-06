;(function() {

    'use strict';

    angular
        .module('components')
        .controller('ComponentsController', ComponentsController);

    /* @ngInject */
    function ComponentsController(resolveUsers) {
        this.users = resolveUsers;

    }

}).call(this);