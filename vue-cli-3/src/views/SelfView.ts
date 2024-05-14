import { createElementVNode, onMounted, h, createVNode, ref } from 'vue'
import { useRoute } from 'vue-router';
import UserComponent from '@/components/UserComponent.vue'
export default {
  setup(props, { slots }) {
    console.log(props, slots)
    let query:any = useRoute().query;
    let name:any = ref(query.name);
    let fn = (w):void => {
      if (typeof w === 'string') {
        name.value = w
      }
    }
    return () => {
      return h('div', {
        onClick: fn
      }, [
        h(UserComponent, {
          name: name.value,
          onChangeUserName: fn
        })
      ])
    }
  },
}
