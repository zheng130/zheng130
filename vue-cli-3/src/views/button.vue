<template>
    <div class="box">
        <div class="title">{{ title }}</div>
        <button @click="fn">ok</button>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, watch, reactive } from 'vue';
defineProps({
    title: {
        type: String,
    }
})
const emit = defineEmits(['clickFn']);
const fn = () => {
    emit('clickFn', 123)
}
</script>
<style scoped>
    .box {
        position: absolute;
        width: 300px;
        height: 200px;
        border: 1px solid #ccc;
        background-color: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .title {
        color:  red;
        display: block;
        text-align: center;
        height: 90px;
    }
    button {
        color: red;
        display: block;
        width: 50px;
        height: 40px;
        margin: 0 auto;
    }
</style>