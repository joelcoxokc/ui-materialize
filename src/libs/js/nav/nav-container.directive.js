;(function() {

    'use strict';

    angular
        .module('mz.nav.container', [])
        .directive('mzNavContainer', mzNavContainer);
    //     .directive('navContainer', navContainer)

    // function navContainer() {
    //   return {
    //     restrict: 'E',
    //     scope: {
    //       side: '@',
    //     },
    //     link:link
    //   };
    //   function link(scope, element, attrs) {
    //     console.log(scope.side);
    //   }
    // }

    // function mzNavContainer() {
    //     return {
    //       restrict: 'E',
    //       scope: {
    //         side:'@'
    //       },
    //       link:link,
    //     };

    //     function link(scope, element, attrs) {
    //       element.addClass('mz-nav-conatainer');
    //         // element.addClass('nav-container-'+attrs.mzNavContainer);
    //     }
    // }

}).call(this);



// (function() {
//     angular
//         .module('ui.materialize')
//         .run(["$templateCache", function($templateCache) {
//                     // <!-- <a ui-sref="home" class="brand-logo indigo-text waves-effect waves-light"><strong class="pink-text text-accent-1">ui</strong>Materialize</a> -->
//                       // <!-- <li class="waves-effect waves-light"><a class="pink-text" href="">JavaScript</a></li> -->
//             $templateCache.put('templates/mzNavContainer.template.html',
//                 // '<div class="nav-wrapper">'+
//                   '<div mz-container>'+
//                     '<ul id="" class="left side-nav">'+
//                       '<li><a href="#" mz-toggle-nav="right" toggle=\'open\'><i class="mdi-navigation-menu pink-text text-accent-1"></i></a></li>'+
//                     '</ul>'+
//                     '<ul id="" class="right side-nav">'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="gettingStarted">Getting Started</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="grid">Grid</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="components">Components</a></li>'+
//                     '</ul>'+
//                   '</div>'
//                 // '</div>'
//             )
//         }]);
// }).call(this);


