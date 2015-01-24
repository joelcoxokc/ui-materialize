// ;(function() {

//     'use strict';

//     angular
//         .module('ui.materialize.nav')
//         .service('rightNavService', rightNavService)

//     /* @ngInject */
//     function rightNavService(){
//         var that_ = this;

//         this.defaults = ['fixed', 'medium', 'open', 'fold'];

//         this.enable = function(config){
//             // _.assign(this, config);
//             this.configure(config);
//         }

//         /**
//          * Activated form the mzController passing the directive element
//          * @param  {Object} element Directive element
//          */
//         this.activate = function (element) {

//             this.$element = element;
//             this.$element.addClass(this.class);
//             this.$element.addClass(this.classList);

//             // console.log(this);

//         };

//         /**
//          * Wacth
//          * @Watch for events on the model.
//          */
//         this.watch = function() {
//             this.parent.$watchCollection('$navs.right', function(val, params, p, ppp) {
//                 // console.log(that_.scope);
//             });
//         };

//         *
//          * Configure
//          * @Configure classes for use in the directive.

//         this.configure = function(config) {

//               this.classList = config.class;
//               if (config.open) {
//                 this[config.open.scope] = config.open.default;
//                 if(this[config.open.scope]){
//                     this.classList += ' '+config.open.class;
//                 }
//               }
//               if (config.fold) {
//                 this[config.fold.scope] = config.fold.default;
//                 if(this[config.fold.scope]){
//                     this.classList += ' '+config.fold.class;
//                 }
//               }
//               if (config.medium) {
//                 this[config.medium.scope] = config.medium.default;
//                 if(this[config.medium.scope]){

//                     this.classList += ' '+config.medium.class;
//                 }
//               }
//               if (config.fixed) {
//                 this[config.fixed.scope] = config.fixed.default;
//                 if(this[config.fixed.scope]){
//                     this.classList += ' '+config.fixed.class;
//                 }
//               }
//         }
//     }

// }).call(this);
