<template>
  <ModeBox @changeVal="changeVal">
   
   <template v-slot="ad">
    <div>
      {{ ad.data }}
    </div>
   </template>
  </ModeBox>
</template>

<script setup lang="ts" name="ddd">
import {toRef, toRefs, ref} from 'vue'
import { useRoute } from 'vue-router';
import ModeBox from '../components/ModeBox.vue'
const route = useRoute();
let vid = toRef(route.query.id)

const changeVal = (v:string) => {
  vid.value = v;
  
}
</script>
<style>

</style>
