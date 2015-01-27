;(function() { 'use strict';

    angular
        .module('mz.nav.collapse', [])
        .directive('navCollapse', navCollapse)
        ;

    /* @ngInject */
    function navCollapse() {

        return { template  : '<li><div class="{{waves}} collapsible-header" data-ng-class="childClassList">'+
                               '<span class="nav-action-text">{{header}}</span>'+
                               '<i data-ng-if="icon" class="{{icon}}"></i></div>'+
                               '<div class="collapsible-body" data-ng-class="">'+
                                 '<ul data-ng-transclude></ul></div></li>'
               , restrict  : 'E'
               , require   : '^navCollapsibleGroup'
               , scope     : { header:'@' }
               , replace   : true
               , transclude: true
               , link      : link
               };

        ///////////////////

        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;

            inner = element.children();
            element.addClass('nav-collapse');

            ///  @scope state  |  set the state for ui-sref if attribute is passed
            ///  @scope link   |  set the link for href if attribute is passed
            ///  @scope waves  |  set waves on scope, or default wave is specified. otherwise no waves used
            scope.state = attrs.state  || null;
            scope.link  = attrs.link   || null;
            scope.icon  = attrs.icon   || null;

            // FIXME: What's the new behavior here?

            attrs.waves &&( scope.waves = 'waves-effect ' );
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {
                scope.waves += 'waves-'+attrs.waves; }
            else {
                scope.waves += 'waves-light'; }

            //////     @transclude  |  transclude the actions
            // transclude(scope, function (clone) {
            //     inner.append(clone);
            // });
          }
      }
  }).call(this);