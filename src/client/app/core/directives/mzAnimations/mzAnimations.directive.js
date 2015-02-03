/* global jQuery:false */
;(function() { 'use strict';

    angular
        .module('core')
        .directive('mzAnimations', mzAnimations)
        ;

    /* @inject */
    function mzAnimations(TweenMax, TimelineLite, Cubic) {
        return { templateUrl : 'app/core/directives/mzAnimations/mzAnimations.template.html'
               , restrict    : 'E'
               , scope       : true
               , controller  : 'GridController'
               , link        : link
               };

        ////////////////

        function link(scope, element, attrs) {
            var offsets =
                { s1:'8.33333%'
                , s2:'16.66667%'
                , s3:'25%'
                , s4:'33.33333%'
                , s5:'41.66667%'
                , s6:'50%'
                , s7:'58.33333%'
                , s8:'66.66667%'
                , s9:'75%'
                , s10:'83.33333%'
                , s11:'91.66667%'
                , s12:'100%'
                };

            var $hideable = $(element).find('.grid-block').not('.indigo').parent();
            var $offseters = $(element).find('.offseter');
            var $container = $('.grids-container.container');
            $hideable.addClass('hide-on-offset');

            scope.$watch('showContainer', function (val) {
                TweenMax.to($container, 0.2, (val ?
                    { maxWidth:'1280px' , width:'70%'  , ease:Cubic.easeIn } :
                    { maxWidth:'100%'   , width:'100%' , ease:Cubic.easeIn } ) );
              });

            jQuery(document).ready(function () {
                var $container = jQuery(element);
                var $grey1  = $container.find('.grey.lighten-1');
                var $grey2  = $container.find('.grey.lighten-2');
                var $white  = $container.find('.white');
                var $indigo = $container.find('.indigo');
                var $pink   = $container.find('.pink').not('.accent-1, .accent-2');
                var $pink1  = $container.find('.pink.accent-1');
                var $pink2  = $container.find('.pink.accent-2');

                var anim = {};
                anim.one = {rotationX:'90', ease:Cubic.easeIn};
                anim.two =
                    [ {rotationX:'90', y:'100%', ease:Cubic.easeIn}
                    , {rotationX:'90', y:'-100%', ease:Cubic.easeIn}
                    ];
                anim.three =
                    [ {x:'100%', autoAlpha:0, ease:Cubic.easeIn}
                    , {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                    ];
                anim.four =
                    [ {x:'100%', autoAlpha:0, ease:Cubic.easeIn}
                    , {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                    ];
                anim.five =
                    [ {x:'100%', autoAlpha:0, ease:Cubic.easeIn}
                    , {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                    ];
                anim.six =
                    [ {rotation:'180deg', autoAlpha:0, ease:Cubic.easeIn}
                    , {rotation:'-180deg', autoAlpha:0, ease:Cubic.easeIn}
                    ];

                ( new TimelineLite() )
                    .add(pinks)
                    .add(indigos)
                    .add(whites)
                    .add(grey2s)
                    .add(grey1s)
                    ;

                function grey1s() {
                    ( new TimelineLite() )
                        .from($grey1.slice(0, 2), 0.5, anim.six[0], 3)
                        .from($grey1.slice(2, 4), 0.5, anim.six[1], 3)
                        ;  }
                function grey2s() {
                    ( new TimelineLite() )
                        .from([$grey2[4], $grey2[6]], 0.5, anim.five[0], 2.5)
                        .from([$grey2[5], $grey2[7]], 0.5, anim.five[1], 2.5)
                        .from([$grey2[0], $grey2[1], $grey2[8], $grey2[9]], 0.5, anim.six[1], 3)
                        .from([$grey2[2], $grey2[3], $grey2[10], $grey2[11]], 0.5, anim.six[0], 3)
                        ;  }
                function whites() {
                    ( new TimelineLite() )
                        .from([$white[6], $white[8]],  0.5, anim.four[1], 2)
                        .from([$white[7], $white[9]],  0.5, anim.four[0], 2)
                        .from([$white[4], $white[10]], 0.5, anim.five[1], 2.5)
                        .from([$white[5], $white[11]], 0.5, anim.five[0], 2.5)
                        .from([$white[0], $white[1], $white[12], $white[13]], 0.5, anim.six[1], 3)
                        .from([$white[2], $white[3], $white[14], $white[15]], 0.5, anim.six[0], 3)
                        ;  }
                function indigos() {
                    ( new TimelineLite() )
                        .from($indigo.slice(8, 10), 0.5, anim.one)
                        .from([$indigo[6], $indigo[10]], 0.5, anim.three[1], 1.5)
                        .from([$indigo[7], $indigo[11]], 0.5, anim.three[0], 1.5)
                        .from([$indigo[4], $indigo[12]], 0.5, anim.four[1], 2)
                        .from([$indigo[5], $indigo[13]], 0.5, anim.four[0], 2)
                        .from([$indigo[2], $indigo[14]], 0.5, anim.five[1], 2.5)
                        .from([$indigo[3], $indigo[15]], 0.5, anim.five[0], 2.5)
                        .from([$indigo[1], $indigo[17]], 0.5, anim.six[0], 3)
                        .from([$indigo[0], $indigo[16]], 0.5, anim.six[1], 3)
                        ;  }
                function pinks() {
                    ( new TimelineLite() )
                        .from($pink1, 0.5, anim.one)
                        .from($pink2[0], 0.5, anim.two[0], 0.5)
                        .from($pink2[1], 0.5, anim.two[1], 0.5)
                        .from([$pink[0], $pink[2]], 0.5, anim.three[0], 1)
                        .from([$pink[1], $pink[3]], 0.5, anim.three[1], 1)
                        ;  }
              }); // end jQuery().ready(function{ ... });
          }
      }

  }).call(this);
