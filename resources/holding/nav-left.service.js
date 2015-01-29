;(function() { 'use strict';

    angular
        .module('mz.nav.services.left', [])
        .service('$LeftNavigationService', $LeftNavigationService)
        ;

    /* @ngInject */
    function $LeftNavigationService(){
        var that_ = this;

        this.activate = function(scope, element, attrs) {
            this.scope     = scope;
            this.attrs     = attrs;
            this.element   = element;
            this.side      = 'left';
          };

        this.init = function(element, attrs) {
            this.element = element;
            vizList = (  attrs.viz || 'fat'  ).split(/([,\s]+)/);
            vizList = (  attrs.viz || 'fat'  ).split(' ');
            vizIndex = 0;
            this.useViz(vizList[vizIndex]);
          };

        this.cycle = function() {
            vizIndex = Math.floor((vizIndex+1) % vizList.length);
            this.useViz( vizList[vizIndex] );
          };

        this.useViz = function(viz) {
            this.viz && this.element.removeClass('nav-viz-'+this.viz);
            this.element.addClass('nav-viz-'+(  this.viz = viz  ));
          };

        // return String "nav-left-STRING_VALUE_RECEIVED"
        function useClass(value) { return that_.classList+'-'+value; }

      }

  }).call(this);
