;(function() { 'use strict';

    angular
        .module('mz.core.transclude-replace', [])
        .directive('ngTranscludeReplace', ngTranscludeReplace)
        ;

    /* @inject */
    function ngTranscludeReplace() {
        return { terminal : true
               , restrict : 'EA'
               , link     : link
               };

        function link(scope, element, attrs, ctrl, transclude) {
            if (!transclude) {
                $log.error('orphan', 'Illegal use of ngTranscludeReplace directive in the template.'+
                     ' Must have a parent directive that requires transclusion. ');
                return; }
            transclude(function (clone) { clone.length ? $element.replaceWith(clone) : $element.remove(); });
            }

        } // end function ngTranscludeReplace

    }).call(this);
