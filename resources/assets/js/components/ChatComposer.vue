<template>
    <div style="margin-top:20px">
        <input type="text" class="form-control" v-model="content">
        <button style="margin-top:20px" class="btn btn-danger" @click="sendMessage">send</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ''
            }
        },
        methods: {
            sendMessage() {
                this.$emit('insert-message', {
                    'content' : this.content,
                });
                this.content = '';
            }
        }
    }
</script>

<style scoped>

</style>