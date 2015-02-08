;(function() { 'use strict';
    angular
        .module('mz.components.slider', [])
        .directive('mzSlider', mzSlider)
        ;

    /* @inject */
    function mzSlider() {
        return  { templateUrl: 'components/slider.html'
                , restrict   : 'E'
                , scope      : true
                , transclude : true
                , link       : link
                }; // templateUrl:
        function link(scope, element, attrs) {
            // $('.slider').slider({full_width: true});
            $(document).ready(function(){
              var options = {
                indicators : (attrs.indicators === 'false') && false,
                transition : (attrs.transition) && parseFloat(attrs.transition),
                interval   : (attrs.interval) && parseFloat(attrs.interval),
                height     : (attrs.sliderHeight) && parseFloat(attrs.sliderHeight)
              };
              console.log(options)
              $('.slider').slider(options);
            });

          }
      }
  }).call(this);
