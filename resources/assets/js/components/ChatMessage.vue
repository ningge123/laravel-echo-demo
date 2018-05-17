<template>
    <div  class="chat-info">
        <p>{{ message.content }}</p>
        <small>{{ message.user ?  message.user.name : '' }}</small>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

<style scoped>
    .chat-info{
        padding: 10px;
    }
</style>