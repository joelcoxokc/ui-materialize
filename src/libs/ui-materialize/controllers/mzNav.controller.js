;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .controller('mzNavController', mzNavController)

    /* @ngInject */
    function mzNavController($scope, $mzConfig, Scopify) {


        var _this, classNames;
        _this = this;
        this.shown = true
        Scopify('mzNavController', $scope, this)
        this.show = false
        classNames = {
            $hasAsideLeft:  'has-side-left',
            $hasAsideRight: 'has-side-right',
            $isLeftOpen:    'mz-side-left-open',
            $isRightOpen:   'mz-side-right-open',
            $isLeftFolded:  'mz-side-left-folded',
            $isRightFolded: 'mz-side-right-folded'
        }

        angular.extend(_this, $mzConfig);

        _this.init = function(context) {

            _this.$mz = context;
        };

        $scope.onAdd = function(nav) {
            // console.log('[mzConfig]: onAdd', nav.name);
            var condition   = _this.conditions[nav.name];
            var toggle      = condition.add;
            _this.$mz[toggle] = true;
        };

        _this.addContainer = function () {
            _this.$mz.$hasContainer;
            _this.$mz.$emit('$hasContainer')
        }

        _this.$toggleSide = function(name) {
            var nav = _this.navs[name];
        }

        $scope.$watch(function ( value ) {
            // console.log(value)
        })
    }

}).call(this);