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
        seen:true
    }
})

app.seen=false;