;(function() { 'use strict';
    angular
        .module('mz.components.action-btn', [])
        .directive('mzActionBtn', mzActionBtn)
        .directive('actionBtn', actionBtn)
        .directive('actionList', actionList)
        ;

    /* @inject */
    function mzActionBtn() {
        return  { templateUrl   : 'components/action-btn.html'
                , restrict   : 'E'
                , replace    : true
                , transclude : true
                , scope      : {viz: '@', type:'@', size: '@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.viz &&( element.addClass('action-btn-'+scope.viz) )
            scope.size &&( element.addClass('mz-action-btn-'+scope.size) )
          }
      }

    /* @inject */
    function actionBtn() {
        return  { template   : '<a class="btn action-btn mz-btn"><i data-ng-if="icon" data-ng-class="icon"></i></a>'
                , restrict   : 'E'
                , replace    : true
                , transclude : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.type &&( element.addClass('btn-'+scope.type) )
            scope.size &&( element.addClass('btn-'+scope.size) )

            transclude(scope, function (clone) {element.append(clone); });

          }
      }

    /* @inject */
    function actionList() {
        return  { templateUrl   : 'components/action-list.html'
                , restrict   : 'E'
                , replace    : true
                , transclude : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {


          }
      }

  }).call(this);
