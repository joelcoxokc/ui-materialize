;function() { 'use strict';
    angular
        .module('mz.core.transclude-replace', [])
        .directive('ngTranscludeReplace', ngTranscludeReplace);

    /* @inject */
    function ngTranscludeReplace() {
        return {
            terminal: true,
            restrict: 'EA',
            link: link
        };
        ////////////////
        ///
        ///
        function link(scope, element, attrs, ctrl, transclude) {

            if (!transclude) {
                $log.error('orphan',
                     'Illegal use of ngTranscludeReplace directive in the template! ' +
                     'No parent directive that requires a transclusion found. ');
                return;
            }

            transclude(function (clone) {
                if (clone.length) {
                    $element.replaceWith(clone);
                } else {
                    $element.remove();
                }
            });
            ///////////////////////////////
        }
    }

}).call(this);