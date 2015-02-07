;(function() { 'use strict';
    angular
        .module('mz.components.dropdown', [])
        .directive('mzDropdown', mzDropdown)
        .directive('mzDropdownToggle', mzDropdownToggle)
        .directive('dropdownMenu', dropdownMenu)
        .service('$DropdownService', DropdownService)
        .controller('DropdownCtrl', DropdownCtrl)
        ;

    /* @ngInject */
    function DropdownService($document) {
      var _this = this;
      var openScope = null;

      this.open = function(dropdownScope) {
          if (!openScope) {

            }
            openScope = dropdownScope
        };

      this.close = function(dropdownScope) {
          if (openScope === dropdownScope) {

              openScope = null;

            }
        };
    }

    /* @ngInject */
    function DropdownCtrl($scope, $attrs, $DropdownService) {
        var _this   = this;
        var classes = {open:'open'};

        this.init = function(element) {
            this.$element = element;
            $scope.isOpen = angular.isDefined($attrs.isOpen) ? $scope.$parent.$eval($attrs.isOpen) : false;
            $scope.toggle = this.toggle;
          };

        this.toggle = function(open) {
            $scope.isOpen = !$scope.isOpen;
          };

        this.close = function(open) {
            this.$element.removeClass('open');
          };

        this.isOpen = function(open) {
            return $scope.isOpen;
          };

        this.onToggle = function(open) {
            open ? this.$element.addClass('open') : this.$element.removeClass('open');
          };

        $scope.$watch('isOpen', function (value) {

            _this.onToggle(!!value);
          });

        $scope.$on('$locationChangeSuccess', function(){
            $scope.isOpen = false;
          });
      }

    /* @inject */
    function mzDropdown() {
        return  { templateUrl: 'components/dropdown.html'
                , restrict   : 'E'
                , transclude : true
                , replace    : true
                , controller : 'DropdownCtrl as drop'
                , scope      : {isOpen: '=?'}
                , link       : link
                };
        function link(scope, element, attrs, ctrl) {}
      }

    /* @inject */
    function dropdownMenu() {
        return  { restrict   : 'EA'
                , require    : '^mzDropdown'
                , link       : link
                };
        function link(scope, element, attrs, ctrl) {
            ctrl.init(element);

          }
      }


    /* @inject */
    function mzDropdownToggle($document) {
        return  { restrict   : 'A'
                , require    : '^mzDropdown'
                , scope      : true
                , link       : link
                };
        function link(scope, element, attrs, ctrl) {

            ctrl.toggleElement = element;

            element.bind('click', toggleDrop);

            function toggleDrop(){
              event.preventDefault();
              event.stopPropagation();
              scope.$apply(function(){
                ctrl.toggle();
              })
              $document.bind('click'   , close);
              $document.bind('keydown' , closeEscape);
            }


            function close() {
              ctrl.close()
            }
            function closeEscape(evt) {
              if(evt.which === 27) {
                close()
              }
            }
            scope.$on('$destroy', function(){
              element.unbind('click'     , close);
              $document.unbind('click'   , close);
              $document.unbind('keydown' , closeEscape);
            })
          }
      }
  }).call(this);
