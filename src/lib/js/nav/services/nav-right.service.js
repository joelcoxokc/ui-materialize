;(function() { 'use strict';

    angular
        .module('mz.nav.services.right', [])
        .service('$RightNavigationService', $RightNavigationService)
        ;

    /* @ngInject */
    function $RightNavigationService(){
        var that_ = this;

        return function Right(scope, element, attrs) {
            var _this      = this;
            this.scope     = scope;
            this.attrs     = attrs;
            this.element   = element;
            this.side      = 'right';
            this.vizList   = (  attrs.viz || 'fat'  ).split(/([,\s]+)/);
            this.vizList   = (  attrs.viz || 'fat'  ).split(' ');
            this.vizIndex  = 0;

            this.activate = function() {
                this.element.addClass('start-viz-'+this.vizList[this.vizIndex]);
                this.useViz(this.vizList[this.vizIndex]);
              };

            this.cycle = function() {
                this.vizIndex = Math.floor((this.vizIndex+1) % this.vizList.length);
                this.useViz( this.vizList[this.vizIndex] );
              };

            this.useViz = function(viz) {
                this.viz && this.element.removeClass('nav-viz-'+this.viz);
                this.element.addClass('nav-viz-'+(  this.viz = viz  ));
              };

            this.activate()
        }
      }

  }).call(this);
