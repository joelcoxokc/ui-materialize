;(function() { 'use strict';
    angular
        .module('mz.nav.services.footer', [])
        .service('$FooterNavService', $FooterNavService)
        ;

    /* @ngInject */
    function $FooterNavService(){
        this.activate = function(scope) {  this.scope = scope;  };
        this.watch = function() {
            // this.scope.$watchCollection('open', function() {
            // });
          };
      }

  }).call(this);
