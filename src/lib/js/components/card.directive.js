;(function() { 'use strict';
    angular
        .module('mz.components.card', [])
        .directive('mzCard', mzCard)
        .directive('cardTitle', cardTitle)
        .directive('cardContent', cardContent)
        .directive('cardAction', cardAction)
        ;

    /* @inject */
    function mzCard() {
        return  { templateUrl: 'components/card.template.html'
                , restrict   : 'E'
                , scope      : true
                , link       : link
                , replace    : true
                , transclude : true
                };
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-card');
            transclude(scope, function (clone) {element.append(clone)});
          }
      }

      /* @ngInject */
      function cardContent() {
          return  { template   : '<div class="card-content" data-ng-transclude></div>'
                  , link       : link
                  , scope      : true
                  , restrict   : 'EA'
                  , replace    : true
                  , transclude : true
                  };
          function link(scope, element, attrs, ctrl, transclude) {
              element.addClass('mz-card-content');
              if (attrs.title) {
                var title = angular.element('<span>').addClass('card-title').text(attrs.title);
                element.append(title); }
            }
        }

      /* @ngInject */
      function cardTitle() {
          return  { template   : '<span class="card-title" data-ng-transclude></span>'
                  , link       : link
                  , scope      : true
                  , replace    : true
                  , restrict   : 'EA'
                  , transclude : true
                  };
          function link(scope, element, attrs, ctrl, transclude) {}
        }

      /* @ngInject */
      function cardAction() {
          return  { template   : '<div class="card-action" data-ng-transclude></div>'
                  , link       : link
                  , scope      : true
                  , replace    : true
                  , restrict   : 'EA'
                  , transclude : true
                  };
          function link(scope, element, attrs, ctrl, transclude) { var waves = false; } // FIXME: This apparently does nothing.
        }

  }).call(this);
