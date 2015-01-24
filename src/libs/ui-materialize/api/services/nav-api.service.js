;(function(){

    'use strict';

    var required, navs, app;

        /* @ngInject */
        function mzNavApi(MZ_TopProvider, MZ_RightProvider, MZ_BottomProvider, MZ_LeftProvider){

            var _this    = this;
            var that_    = this;

            this.config = {
                name:'mzNav',
                model: '$mzNav',
                class: 'mz-nav',
                init:  function() {
                    var _this = this,
                    has = [];
                    angular.forEach(this.navs, function (nav, key){
                        has.push('has-'+key)
                    });
                    this.hasNavs = has
                },
                navs:{
                    top: {
                        name:'top',
                        model:'top',
                        class:'nav-top',
                        fixed: {
                            default:true,
                            scope:'isFixed',
                            class:'nav-top-fixed'
                        },
                        small:{
                            default:true,
                            scope:'isSmall',
                            class: 'mav-top-small'
                        },
                        theme:{
                            text: {
                                color:'grey',
                                lighten:4,
                                darken:false
                            },

                            background: {
                                color:'grey',
                                lighten:false,
                                darken:4
                            }
                        },
                        expand:{
                            default:false,
                            name:'expand',
                            scope:'isExpanded',
                            class:'naz-top-expanded'
                        },
                        hide:{
                            default:false,
                            name:'hide',
                            scope:'isHidden',
                            class:'nav-top-hidden'
                        }
                    },
                    right: {
                        name: 'right',
                        model: 'right',
                        class: 'nav-right',
                        classList:'',
                        fixed:{
                            default:true,
                            name:'fixed',
                            scope:'isFixed',
                            class:'nav-right-fixed'},
                        medium:{
                            default:true,
                            name:'medium',
                            scope:'isMedium',
                            class:'nav-right-medium'},
                        theme:{
                            text: {
                                color:'grey',
                                lighten:4,
                                darken:false},

                            background: {
                                color:'grey',
                                lighten:false,
                                darken:4}},
                        open:{
                            name:'open',
                            scope:'isOpen',
                            class:'nav-right-open',
                            default:false,
                            toggle:function() {
                                this[this.scope] = !this[this.scope];
                            }
                        },
                        fold:{
                            name:'fold',
                            scope:'isFolded',
                            class:'nav-right-fold',
                            default:true,
                            toggle: function() {
                                this[this.scope] = !this[this.scope];
                            }}}}}

             /////
            //////////////////////////////
            //////////////////////////////////////////////////////
            this.$get = function($injector) {

                function Nav($NavService){
                    _.assign(this, _this.config);
                    // this.init();
                    // this.$navs = {};

                    // this.$navs.top = topNavService;
                    // this.$navs.top.enable(this.navs.top)

                    // this.$navs.bottom = bottomNavService;
                    // // this.$navs.bottom.enable(this.navs.bottom)

                    // this.$navs.right = rightNavService;
                    // this.$navs.right.enable(this.navs.right)

                    // this.$navs.left = leftNavService;
                    // this.$navs.left.enable(this.navs.left)
                }

                Nav.prototype.Nav = Nav;
                Nav.prototype.enable = function(scope) {};

                return $injector.instantiate(Nav);
                // return Nav
            }
            //////////////////////////////////////////////////////
            //////////////////////////////

        }

        /* @ngInject */
        function decorate($provide) {

            $provide.decorator('mzNavApi', function ($delegate, $controller){
                // console.log($delegate);
                var ctrl   = $controller('mzController')




                return $delegate
            });
        }////////////////////////////////////

    angular
        .module('ui.materialize.nav.api', [

            'ui.materialize.api.nav.top',
            'ui.materialize.api.nav.right',
            'ui.materialize.api.nav.bottom',
            'ui.materialize.api.nav.left'
        ])
        .provider('mzNavApi', mzNavApi)
        // .config(decorate)

}).call(this);