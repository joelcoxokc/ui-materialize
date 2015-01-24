// /* global Class:false */
// ;(function() {
//     'use strict';


//     angular
//         .module('ui.materialize')
//         .classy.controller( mzController() );

//     // /* @ngInject */
//     function mzController() {

//         return {

//             name: 'mzController',

//             inject: ['$scope', '$location', 'User', '$mzApi'],
//             data: {
//                 todos: 'User.all()',
//                 editedTodo: 'null'
//             },
//             init: function() {
//                 // this.addTodo({
//                 //     title: 'My first todo',
//                 //     completed: false
//                 // });
//             },
//             watch: {
//                 '{object}todos': '_onTodoChange'
//             },
//             methods: {
//                 addTodo: function(newTodo) {
//                     var newTodo = newTodo || this.$.newTodo.trim();
//                     this.$.todos.push({
//                         title: newTodo,
//                         completed: false
//                     });
//                 },

//                 _onTodoChange: function(newValue, oldValue) {
//                     this.$.remainingCount =
//                         this.filterFilter(this.$.todos, { completed: false }).length;
//                 }
//             }

//         }
//     }



// }).call(this);