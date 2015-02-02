;(function (){

    'use strict';
    /**
    * Event dispatcher class,
    * add ability to dispatch event
    * on native classes.
    *
    * Use of Class.js
    *
    * @author universalmind.com
    */
    angular
        .module('ui.materialize.api')
        .provider('EventDispatcher', EventDispatcher);


    function EventDispatcher(){

        var that_ = this;
        this.init = 'initialized'

        function eventDispatcher(){

            this._listeners = {};
        }

        /**
        * Add a listener on the object
        * @param type : Event type
        * @param listener : Listener callback
        */
        EventDispatcher.addEventListener = function(type,listener) {
            if (!this._listeners[type]) {
                this._listeners[type] = [];
            }
            this._listeners[type].push(listener)
        };


        /**
           * Remove a listener on the object
           * @param type : Event type
           * @param listener : Listener callback
           */
        EventDispatcher.addEventListener.removeEventListener = function(type,listener) {
          if (this._listeners[type]) {
            var index = this._listeners[type].indexOf(listener);

            if (index!==-1) {
                this._listeners[type].splice(index,1);
            }
          }
        };


        /**
        * Dispatch an event to all registered listener
        * @param Mutiple params available, first must be string
        */
        EventDispatcher.dispatchEvent = function() {
            var listeners;

            if (typeof arguments[0] !== 'string'){
                console.warn('EventDispatcher','First params must be an event type (String)')
            } else {
                listeners = this._listeners[arguments[0]];

                for (var key in listeners) {
                    //This could use .apply(arguments) instead, but there is currently a bug with it.
                    listeners[key](arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
                }
            }
        };

         /////
        //////////////////////////////
        //////////////////////////////////////////////////////
            that_.$get = function($injector) {
                var events = eventDispatcher
                return events
            }



        //////////////////////////////////////////////////////
        //////////////////////////////
        // console.log(_this.navs);

    }

}).call(this);