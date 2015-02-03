;(function() { 'use strict';
    angular
        .module('mz.components.collection', [])
        .directive('mzCollection', mzCollection)
        .directive('collectionItem', collectionItem)
        .directive('collectionLink', collectionLink)
        .directive('collectionHeader', collectionHeader)
        .directive('itemSecondary', itemSecondary)
        ;

    /* @inject */
    function mzCollection() {
        return  { templateUrl : 'components/collection.html'
                , scope      : {}
                , restrict   : 'E'
                , controller : controller
                , replace    : true
                , transclude : true
                , link       : link
                };

        function controller($scope) {}

        function link(scope, element, attrs, ctrl) {}

      } // end function mzCollection

    /* @inject */
    function collectionItem($animate, $document) {
        return  { templateUrl : 'components/collection-item.html'
                , require     :'^mzCollection'
                , restrict    :'E'
                , replace     : true
                , transclude  : true
                , link        :link
                };

        /////////////

        function link(scope, element, attrs, api) {};

      }


    /* @inject */
    function collectionLink() {
        return  { template    : '<a class="collection-item" data-ng-transclude></a>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {
            attrs.active &&(element.addClass('active'))
          };

      }

    /* @inject */
    function collectionHeader() {
        return  { template    : '<div class="collection-header" data-ng-transclude></div>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {};

      }
    /* @inject */
    function itemSecondary() {
        return  { template    : '<a class="secondary-content" data-ng-transclude></a>'
                , require     : '^mzCollection'
                , restrict    : 'E'
                , replace     : true
                , transclude  : true
                , link        : link
                };

        /////////////

        function link(scope, element, attrs, api) {

            if(attrs.icon) {
                var icon = angular.element('<i class="'+attrs.icon+'"></i>')
                element.append(icon);
              }
          };

      }

  }).call(this);
