;(function() {
    'use strict';

    angular
        .module('mz.nav.services', [
            'mz.nav.services.api',
            'mz.nav.services.nav',
            'mz.nav.services.left',
            'mz.nav.services.right',
            'mz.nav.services.bar',
            'mz.nav.services.footer'
        ]);

}).call(this);