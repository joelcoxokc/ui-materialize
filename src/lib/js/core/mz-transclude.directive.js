;(function() { 'use strict';
    angular
        .module('mz.core.transclude', [])
        .directive('ngTransclude', ngTransclude)
        .config(transcludeHelper);

    /* @ngInject */
    function transcludeHelper($provide) {

        $provide.decorator('ngTranscludeDirective', ['$delegate', function ($delegate) {
            $delegate.shift();

            return $delegate;
        }]);
    }

    /* @inject */
    function ngTransclude() {
        return {
            restrict: 'EAC',
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {
            var iScopeType = attrs.ngTransclude || 'sibling';

            switch (iScopeType) {
                case 'sibling':
                    transclude(function (clone) {
                        element.empty();
                        element.append(clone);
                    });
                    break;
                case 'parent':
                    transclude(scope, function (clone) {
                        element.empty();
                        element.append(clone);
                    });
                    break;
                case 'child':
                    var iChildScope = scope.$new();

                    transclude(iChildScope, function (clone) {
                        element.empty();
                        element.append(clone);
                        element.on('$destroy', function () {
                            iChildScope.$destroy();
                        });
                    });
                    break;
                default:
                    var count = parseInt(iScopeType);
                    if (!isNaN(count)) {
                        var toClone = scope;
                        for (var idx = 0; idx < count; idx++) {
                            if (toClone.$parent) {
                                toClone = toClone.$parent;
                            } else {
                                break;
                            }
                        }

                        transclude(toClone, function (clone) {
                            element.empty();
                            element.append(clone);
                        });
                    }
                }
            ///////////////////////////////
        }
    }

}).call(this);