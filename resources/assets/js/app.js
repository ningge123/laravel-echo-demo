
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data() {
        return {
            messages: []
        }
    },
    created() {
        axios.get('/messages').then((response) => {
            this.messages = response.data
        })

        Echo.join('chatroom')
            .listen('PushMessageEvent', (e) => {
                e.message.user = e.user;
                this.messages.push(e.message)
            })
    },
    methods: {
        updateMessage(message) {

            axios.post('/messages', message).then((response) => {
                this.messages.push(response.data)
            })
        }
    },
});
