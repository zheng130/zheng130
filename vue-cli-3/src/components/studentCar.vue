<template>
    <div>dd</div>
</template>
<script setup lang="ts">
import {ref, defineExpose} from 'vue'
const a = 3
const b = () => {
    console.log(8, a)
}
defineExpose([a, b])
</script>