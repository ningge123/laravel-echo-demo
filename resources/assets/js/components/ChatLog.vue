<template>
    <div>
        <div v-for="message in messages" class="chat-log">
            <chat-message :message="message"></chat-message>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['messages'],
    }
</script>

<style scoped>
    .chat-log:nth-child(even) {
        background-color: #77777730;
    }
</style>