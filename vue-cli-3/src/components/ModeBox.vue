<template>
    <!-- <div>
        <div>33</div>
    </div> -->
    <div>
        <slot :data="games"></slot>

    </div>
    <!-- <button @click="fn">change</button> -->
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, reactive } from 'vue';
let props = defineProps(['vid'])
const emit = defineEmits(['changeVal'])
let games = reactive([
    {name: 'zheng1'},
    {name: 'zheng3'},
    {name: 'zheng5'},
])
const fn = () => {
    emit('changeVal', 444)
}
watch(props.vid, (d) => {
    console.log(',,,',d)
})
</script>