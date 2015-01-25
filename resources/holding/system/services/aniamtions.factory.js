;(function() {
    'use strict';

    angular
        .module('ui.materialize')
        .factory( 'SideBarClass', SideBarClass )

    /* @ngInject */
    function SideBarClass($animate, TweenMax, TimelineLight, Cubic) {
        return function() {
            var inEffect        = effect.enter,
            outEffect       = effect.leave,
            outEffectLeave  = effect.inverse || effect.leave,
            fx_type         = effect.animation;
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
        }

    }

}).call(this);