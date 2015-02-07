;(function() { 'use strict';
    angular
        .module('mz.components.action-btn', [])
        .directive('mzActionBtn', mzActionBtn)
        // .directive('actionBtn', actionBtn)
        .directive('actionList', actionList)
        ;

    /* @inject */
    function mzActionBtn() {
        return  { templateUrl   : 'components/action-btn.html'
                , restrict   : 'E'
                , replace    : true
                , transclude : true
                , controller : function(){}
                , scope      : {viz: '@', type:'@', size: '@', icon:'@', nextIcon: '@',btnBg:'@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            scope.viz &&( element.addClass('action-btn-'+scope.viz) )
            ctrl.viz = scope.viz
            var btn = angular.element(element.children('a'));

            // btn.addClass('btn-'+scope.size)


            scope.oldIcon = attrs.icon;

            transclude(scope, function (clone) {element.append(clone); });
          }
      }

    // /* @inject */
    // function actionBtn() {
    //     return  { template   : ''
    //             , restrict   : 'E'
    //             , replace    : true
    //             , transclude : true
    //             , scope      : {icon:'@', nextIcon: '@', type:'@', size: '@'}
    //             , link       : link
    //             };
    //     function link(scope, element, attrs, ctrl, transclude) {
    //         scope.type &&( element.addClass('btn-'+scope.type) )
    //         scope.size &&( element.addClass('btn-'+scope.size) )
    //         scope.oldIcon = attrs.icon;

    //         transclude(scope, function (clone) {element.append(clone); });

    //       }
    //   }

    /* @inject */
    function actionList() {
        return  { templateUrl   : 'components/action-list.html'
                , restrict   : 'E'
                , require    : '^mzActionBtn'
                , replace    : true
                , transclude : true
                , scope      : {icon:'@', type:'@', size: '@'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl, transclude) {
            var child = element.children()
            child = angular.element(child);
            var length = child.children().length

            angular.forEach(child.children(), function (item, index){
                item = angular.element(item);

                if(ctrl.viz === 'top') {
                    item.addClass('btn-position-'+(length - index));
                }
                if(ctrl.viz === 'left') {
                    item.addClass('btn-position-'+(length - index));
                }
                if(ctrl.viz === 'bottom') {
                    item.addClass('btn-position-'+ (index+1));
                }
                if(ctrl.viz === 'right') {
                    item.addClass('btn-position-'+ (index+1));
                }
            })

          }
      }

  }).call(this);
