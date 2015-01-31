;(function() { 'use strict';

    angular
        .module('mz.components.tab', [])
        .directive('mzTab', mzTab)
        .directive('tabItem', tabItem)
        ;

    /* @inject */
    function mzTab() {
          return { templateUrl  : 'components/tab.html'
                 , restrict     : 'E'
                 , scope        : true
                 , replace      : true
                 , transclude   : true
                 , controller   : controller
                 , link         : link
                 };
          function controller($TabsService) {
              this.service = $TabsService
              this.init = function(element, attrs) {
                  this.service.linkTab(element, attrs.id)
                }

            }
          function link(scope, element, attrs, ctrl) {
              ctrl.init(element, attrs)
            }

      }

    /* @inject */
    function tabItem() {
          return { templateUrl  : 'components/tab-item.html'
                 , require      : '^mzTabs'
                 , restrict     : 'E'
                 , scope        : {toggle:'@', active:'@'}
                 , replace      : true
                 , transclude   : true
                 , link         : link
                 };
          function link(scope, element, attrs, ctrl) {
              element = $(element)
              ctrl.addTab(element, attrs, scope);

              scope.$watch('active', function(value) {
                    value ? active() : deActivate();

                });
              function active() {
                  element.addClass('active');
                }
              function deActivate() {
                  element.removeClass('active');
                }
            }

      }

  }).call(this);
