;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .service('$mzConfig', mzConfig)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }

    function mzConfig($q) {
        var _this = this;
        _this.$mz = {};
        _this.navs = {
            top:{},
            right:{},
            bottom:{},
            left:{},
        };
        _this.conditions = {
            top: {
                add:  '$hasNavTop',
            },
            right: {
                add:  '$hasAsideRight',
                open: '$isRightOpen',
                close:'$isRightClosed',
                fold: '$isLeftFolded'
            },
            bottom: {},
            left: {
                add:  '$hasAsideLeft',
                open: '$isLeftOpen',
                close:'$isLeftClosed',
                fold: '$isLeftFolded'
            }
        },
        _this.events = {
            top:{
                add:'$navAdded'
            },
            right:{
                add:'$navAdded',
                open:'$navOpened',
                close:'$navClosed',
                fold:'$navFolded'
            },
            bottom:{
                add:'$navAdded'
            },
            left:{
                add:'$navAdded',
                open:'$navOpened',
                close:'$navClosed',
                fold:'$navFolded'
            }
        };
        _this.classNames = {
            top:{
                open: 'nav-top-open',
                close:'nav-top-close',
                sm: 'nav-top-sm',
                md: 'nav-top-md',
                lg: 'nav-top-lg'
            },
            right:{
                open:'nav-right-open',
                close:'nav-right-close',
                fold:'nav-right-fold'
            },
            bottom:{
                open: 'nav-bottom-open',
                close:'nav-bottom-close',
                sm: 'nav-bottom-sm',
                md: 'nav-bottom-md',
                lg: 'nav-bottom-lg'
            },
            left:{
                open:'nav-left-open',
                close:'nav-left-close',
                fold:'nav-left-fold'
            }
        };


        _this.add = function(nav, position) {
            var defer = $q.defer();
            position = position || 'top';
            if (_this.navs[position].name){
                defer.reject();
                return;
            }

            nav.name       = position;
            nav.events     = _this.events[position];
            nav.classNames = _this.classNames[position];
            var condition   = _this.conditions[nav.name];
            var toggle      = condition.add;
            _this.$mz[toggle] = true;
            _this.navs[position] = nav;

            angular.forEach(_this.conditions[nav.name], function (condition, name) {

                nav[condition] = false;

                nav.$watch(condition, function (value) {
                    console.log(value);
                    // log('nav-'+nav.name, "watching", condition);
                        // log('nav-'+nav.name+' $emmitting', nav.events[name]);
                    nav.$emit(nav.events[name], value);
                });

                // nav['$'+name] = function() {
                //     nav[condition] = !nav[condition];
                // };
            });

            nav.$toggle = function (property){
                nav[property] = !nav[property];
            };
            // Call Global Event before calling directive's event Event before

            console.log('[mzConfig]: onAdd', nav.name);
            nav.$emit('$navAdded', true);
            (nav.$onAdd || angular.noop)(nav);
            defer.resolve(nav);
            return defer.promise;
        };

    }

}).call(this);
