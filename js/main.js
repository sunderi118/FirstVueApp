//v-on


var app= new Vue({
    el: '#app',
    data: {
        message: "hello Vue.js!"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})