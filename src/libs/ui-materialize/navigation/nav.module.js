;(function() {
    'use strict';

    angular
        .module('ui.materialize.nav', [])
        .service('Scopify', function(){
            return function (name, scope, ctrl){
                ctrl = ctrl || {__NAME:'--NO INHERITANTS--'}
                if(scope.__NAME) {
                    scope.__NAME += '  sharded with ==== [mzSideNav]';
                } else {
                    scope.__NAME = 'mzSideNav'
                }
                if(scope.$parent.__NAME){
                    scope.___hasParent += ' -- '+scope.$parent.__NAME
                }

                // scope.__SCOPE = '@scope === [ mzSideNav ]';

                scope.___CONTROLLER = '@inherits === [ '+ctrl.__NAME+' ]';
            }
        })


}).call(this);