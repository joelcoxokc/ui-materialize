;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav')
        // .animation( '.mz-left-open', leftOpen )

    /* @ngInject */
    function leftOpen($animate) {
        return {
            addClass: function(element, className) {
                console.log(className);
            }
        }
    }

}).call(this);

/*


<!-- <ul id="slide-out" class="">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li>
                <div class="collapsible-header">Dropdown<i class="mdi-navigation-arrow-drop-down"></i></div>
                <div class="collapsible-body">
                  <ul>
                    <li><a href="#!">First Dropdown Link</a></li>
                    <li><a href="#!">Second Dropdown Link</a></li>
                    <li><a href="#!">Third Dropdown Link</a></li>
                    <li><a href="#!">Fourth Dropdown Link</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul> -->
 */