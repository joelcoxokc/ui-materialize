;(function() { 'use strict';
    angular
        .module('mz.nav.side.collapse', [])
        .directive('sideCollapse', sideCollapse)
        ;

    /* @ngInject */
    function sideCollapse() {
        return  { templateUrl : 'nav/side-collapse.html'
                , restrict    : 'E'
                , require     : '^sideCollapsible'
                , scope       : { header:'@' }
                , replace     : true
                , transclude  : true
                , link        : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            var defaults;
            var inner = element.children();

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
