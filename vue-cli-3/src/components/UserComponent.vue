<template>
    <div>
        <h1>User Component:{{ name }}</h1>
        <input type="text" placeholder="User Name" @input="updateName">
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineExpose, ref, defineProps, computed, watch } from 'vue';

const updateName = (e: any) => {
    emit('changeUserName', e.target.value)
}

const emit = defineEmits(['changeUserName'])

const props = defineProps({
    name:String,
})
// const name = computed(() => props.name)

// const name = ref(props.name)

// watch(() => props.name, (newName, oldName) => {
//     name.value = newName
// })


</script>

<script lang="ts">
export default {
    name: 'UserComponent'
}
</script>

<style scoped lang="less">

</style>