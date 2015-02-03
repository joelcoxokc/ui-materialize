;(function() { 'use strict';
    angular
        .module('components')
        .controller('ComponentsController', ComponentsController)
        ;

    /* @ngInject */
    function ComponentsController() {
        $(document).ready(function() {
            $('.dropdown-button').dropdown( { constrain_width : false
                                            , outDuration     : 225
                                            , inDuration      : 300
                                            , alignment       : 'left'
                                            , gutter          : 0
                                            , hover           : false
                                            } );
          });
      }

  }).call(this);
