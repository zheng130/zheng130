import { createElementVNode } from 'vue'

export default {
    setup(props,  {slots}) {

        return () => {
            return createElementVNode('div', {}, 'Hello World')
        }
    }
}

   