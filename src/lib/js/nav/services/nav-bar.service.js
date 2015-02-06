;(function() { 'use strict';
    angular
        .module('mz.nav.services.bar', [])
        .factory('$NavBarService', NavBarService)
        .run(function($rootScope, $NavBarService){
          $rootScope.$on('$stateChangeStart', function(event, state){
            if(state.mzBar){
              angular.forEach(state.mzBar, function (value, method){
                  $NavBarService[method](value)
                })
            } else {
              angular.forEach($NavBarService.defaults, function (value, method){
                  $NavBarService[method](value)
                })
            }
          })
        })

    /* @ngInject */
    function NavBarService($NavService, $rootScope) {

        var defaults = { size:'sm' };
        var $navBars = {};

        var NavBar = {
          defaults : defaults,
          add      : add,
          size     : size
        }
        return NavBar;

        //////////////

        function add(scope, element, attrs) {
          $navBars[scope.$id]         = {};
          $navBars[scope.$id].scope   = scope;
          $navBars[scope.$id].element = element;
          $navBars[scope.$id].attrs   = attrs;
          $navBars[scope.$id].size    = attrs.size;
        }

        function size(newSize) {
          angular.forEach($navBars, function (bar){
              bar.element.removeClass('bar-' + bar.size)
              bar.size = newSize;
              bar.element.addClass('bar-' + bar.size);
            });
        }

      }

  }).call(this);
