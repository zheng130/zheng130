import { createApp, defineComponent, createVNode, renderSlot  } from "vue"
// import MessageBox from "@/views/button.vue"
import {styled} from '@styils/vue'
const Div = styled('div', {
    position: 'absolute',
    width: '300px',
    height: '200px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
})

const MyComponent = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div>
        {renderSlot(slots, 'default', { text: 'default slot content' })}
        {renderSlot(slots, 'namedSlot', { text: 'named slot content' })}
      </div>
    );
  },
});

const MessageBox = {
    props: {
        title: {
            type: String
        }
    },
    render(ctx: { $props: any; $emit: any, $attrs:any }) {
        const {$props, $emit, $attrs } = ctx;
        let MyComponen = $attrs.slots;
        let name = $attrs.self?$attrs.self: 'default'
        return <Div>
                <div class="title">{ $props.title }</div>
                <button onClick={$emit('clickFn')}>ok</button>
                <MyComponen v-slots={{ default:() => 
                    <span>{name}</span>
                     }}>
                </MyComponen>
            </Div>
    }
}

function showMsg (title:string, clickHandle:any, slot:any):any {
    let div:HTMLElement;
    if (!document.querySelector('.self')) {
        div = document.createElement('div');
        div.className = "self"
        document.body.appendChild(div)
    } else {
        div = document.querySelector('.self')
    }
    const app = createApp(MessageBox, {
        title,
        onClick() {
            clickHandle&&clickHandle(() => {
                app.unmount();
                div.remove()
            })
        },
        slots: MyComponent,
        self: 'dsd'
    });
    app.mount(div)
}

export default showMsg as any