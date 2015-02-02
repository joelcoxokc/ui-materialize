/* global jQuery:false */
;(function() { 'use strict';

    angular
        .module('mz.components.tabs', [ 'mz.components.tab' , 'mz.components.tab-content' ])
        .directive('mzTabs', mzTabs)
        .controller('tabsController', tabsController)
        .service('$TabsService', TabsService)
        ;

    function TabsService() {
        var _this = this;
        this.tabLength  = 0;
        this.indicator = $('<div class="indicator"></div>');
        this.tabItems  = {};

        this.linkTab = function(element, id) {
            this.tabItems[id].tab = element;
          }

      }
    /* @ngInject */
    function tabsController($scope, $TabsService) {
        var _this = this;
        angular.extend(this, $TabsService)
        this.init = function(element, attrs) {
            this.element = element;
            this.attrs   = attrs;
            this.element.append(this.indicator);
          }

        this.addTab  = function(element, attrs, scope) {
            this.tabLength++;
            this.tabItems[attrs.toggle] = {element:element, attrs:attrs, scope:scope};
            this.setWidth();
            this.tabItems[attrs.toggle].element.on('click', function() {
              $('.mz-tab').removeClass('active');
              _this.tabItems[attrs.toggle].tab.toggleClass('active')
              });
          }

        this.setWidth = function() {
            this.tabWidth = Math.floor(100 / this.tabLength) + '%'
            angular.forEach(this.tabItems, function(item) {
                item.element.css({width: _this.tabWidth } );
              });
          }
      }

    /* @inject */
    function mzTabs() {
        return { templateUrl  : 'components/tabs.html'
               , restrict     : 'E'
               , scope        : true
               , replace      : true
               , transclude   : true
               , controller   : 'tabsController as vm'
               , link         : link
               };

        function link(scope, element, attrs, ctrl) {

            ctrl.init(element.find('ul'), attrs);
          }
      }

  }).call(this);
