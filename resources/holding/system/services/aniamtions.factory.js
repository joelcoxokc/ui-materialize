;(function() { 'use strict';
    angular
        .module('ui.materialize')
        .factory( 'SideBarClass', SideBarClass )
        ;

    /* @ngInject */
    function SideBarClass($animate, TweenMax, TimelineLight, Cubic) {
        return function() {
          var inEffect        = effect.enter;
          var outEffect       = effect.leave;
          var outEffectLeave  = effect.inverse || effect.leave;
          var fx_type         = effect.animation;
          this.addClass = function(element, className, done){
                // if(className){
                //   // var options = Assist.parseClassList(element);
                //   options.motion = 'enter';
                //   options.animation = fx_type;
                //   options.timeoutKey = timeoutKey;
                //   Assist.addTimer(options, element, done);
                //   TweenMax.to(element, options.duration, outEffectLeave);
                //   return function (canceled){
                //     if(canceled){
                //       var timer = element.data(timeoutKey);
                //       if(timer){
                //         Assist.removeTimer(element, timeoutKey, timer);
                //       }
                //     }
                //   };
                // } else {
                //   done();
                // }
              };
          }; // end return function(){...};

      }

  }).call(this);
