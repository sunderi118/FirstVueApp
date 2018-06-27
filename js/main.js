// (function () {
//     'use strict';
//
//     var vm = new Vue({
//         el:"#app",
//         data: {
//             todos:[
//                 'task1',
//                 'task2',
//                 'task3'
//             ]
//         }
//     });
// })();
var app = new Vue({
    el: '#app',
    data: {
        todos:[
            {text:'sjsjs'},
            {text:'sss9si'},
            {text:'uiuiusl'}

        ]
    }
})

app.todos.push({text:'hello'});