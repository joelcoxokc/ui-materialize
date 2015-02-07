;(function() { 'use strict';
    angular
        .module('core')
        .controller('AppController', AppController)
        ;

    /* @ngInject */
    function AppController($scope, $storage, TweenMax, Cubic, $mzNotify) {

        $mzNotify.error('Welcome')

        this.components = getComponents();

        function getComponents() {
            return  [ 'buttons'
                    , 'cards'
                    , 'collapsible'
                    , 'collections'
                    , 'dialogs'
                    , 'notify'
                    , 'dropdowns'
                    , 'forms'
                    , 'media'
                    , 'modals'
                    , 'notifications'
                    , 'progress'
                    , 'select'
                    , 'tabs'
                    , 'tooltips'
                    ];
            }
      }

  }).call(this);
