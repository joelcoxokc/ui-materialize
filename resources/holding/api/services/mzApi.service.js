;(function(){ 'use strict';
    angular
        .module('ui.materialize.api')
        .provider('$mzApi', mzApi)
        .config(function () {
            console.log();
          }  )
        ;
            // var API = mzNav_APIProvider

            // API
            //     .new({
            //         name:'mzNav',
            //         ngModel:'$mzNav',
            //         class:'mz-nav',
            //     })


            // API
            //     .top()
            //         .new({
            //             inherit:  true,
            //             ngModule: 'top',
            //             class:    'mz-nav-top'
            //         })

            //         .style({
            //             fixed: {
            //                 scope: 'isFixed',
            //                 class: 'nav-top-fixed'
            //             },
            //             small: {
            //                 scope: 'isSmall',
            //                 class: 'nav-top-small'
            //             }
            //         })

            //         .theme({
            //             text: {
            //                 color:'grey',
            //                 lighten:4,
            //                 darken:false},

            //             background: {
            //                 color:'grey',
            //                 lighten:false,
            //                 darken:4
            //             }
            //         })

            //         .method({
            //              name: 'expand',
            //             scope: 'isExpanded',
            //             class: 'nav-top-expanded'})

            //         .method({
            //              name: 'hidden',
            //             scope: 'isHidden',
            //             class: 'nav-top-hidden'})


            // API
            //     .right
            //         .new({
            //           inherit: true,
            //           ngModel: 'right',
            //             class:  'mz-nav-right'})

            //         .style({
            //             fixed: {
            //                 scope:  'isFixed',
            //                 class:  'nav-right-fixed'},

            //             medium: {
            //                 scope:  'isMedium',
            //                 class:  'nav-right-medium'}})


            //         .theme({
            //             text: {
            //                 color:'grey',
            //                 lighten:4,
            //                 darken:false},

            //             background: {
            //                 color:'grey',
            //                 lighten:false,
            //                 darken:4}})

            //         .method({
            //              name: 'open',
            //             scope: 'isOpen',
            //             class: 'nav-right-open',
            //             event: 'nav.right.opened',
            //           default: false})

            //         .method({
            //              name: 'folded',
            //             scope: 'isFolded',
            //             event: 'nav.right.folded',
            //             class: 'nav-right-hidden'})

            //         .media({
            //              name: 'small',
            //             label: 'sm',
            //             scope: 'atSmall',
            //             class: 'nav-right-sm'})

            //         .media({
            //              name: 'medium',
            //             label: 'md',
            //             scope: 'atMedium',
            //             class: 'nav-right-md'})

            //         .media({
            //              name: 'large',
            //             label: 'lg',
            //             scope: 'atLarge',
            //             class: 'nav-right-lg'})

        /* @ngInject */
        function mzApi($LayoutProvider, $SystemProvider, $ComponentsProvider, $MenuProvider, EventDispatcherProvider, $NavProvider) {
        // function mzApi() {
        //
            var evet = EventDispatcherProvider;
            // console.log(evet);
            var _this = this;

            this.API         = this;
            this.LAYOUT      = $LayoutProvider;
            this.SYSTEM      = $SystemProvider;
            this.COMPONENTS  = $ComponentsProvider;
            this.MENU        = $MenuProvider
            this.CONFIG      = $MenuProvider
            this.NAVIGATION  = $NavProvider;

            this.$get = function() {
                // console.log(_this.$menu)
                return {};  };
          }

  }).call(this);
