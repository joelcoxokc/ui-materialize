;(function() { 'use strict';
    angular
        .module('mz.components.services.modal', [])
        .factory('$ModalService', ModalService)
        ;

    /* @ngAnotate */
    function ModalService() {
        // var _this = _this;
        var _this      = {};
        _this.$toggles = {};
        _this.$modals  = {};

        _this.register = function(element, id) {

            _this.$modals[id]        = _this.$modals[id] || {};
            _this.$modals[id].el     = $(element);
            _this.$modals[id].isOpen = false;
            /*=====================*/};

        _this.registerToggle = function(element, id) {
            _this.$modals[id] = _this.$modals[id] || {};

            _this.$modals[id].toggle = $(element);

            _this.$modals[id].toggle
              .on('click', function(event){
                  event.preventDefault();
                  _this.toggle(id);
                });
                /*=====================*/};

        _this.toggle = function(id) {

            _this.$modals[id].isOpen ? _this.close(id) : _this.open(id);
            /*=====================*/};

        _this.open = function(id) {
            console.log(_this.$modals[id].el)
            _this.$modals[id].el.openModal();
            _this.$modals[id].el.isOpen = true;
            /*=====================*/};

        _this.close = function(id) {

            _this.$modals[id].el.closeModal();
            _this.$modals[id].el.isOpen = false;
            /*=====================*/};

         return _this;


        // _this.$get = function($injector) {
        //     return $injector.instantiate(Modal);
        //   }
      }

  }).call(this);
