
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueAxios, axios)
Vue.use(iView);
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
            .joining((user) => {// 方法会在其他新用户加入到频道时被执行
                this.$Notice.success({
                    title: '新用户加入提醒',
                    desc: '用户:' + user.name + '加入房间'
                });
            })
            .listen('PushMessageEvent', (e) => {
                e.message.user = e.user;
                this.messages.push(e.message)
            })
            .leaving((user) => { //会在其他用户退出频道时被执行
                this.$Notice.error({
                    title: '用户退出提醒',
                    desc: '用户:' + user.name + '退出房间'
                });
            });
    },
    methods: {
        updateMessage(message) {

            axios.post('/messages', message).then((response) => {
                this.messages.push(response.data)
            })
        }
    },
});
