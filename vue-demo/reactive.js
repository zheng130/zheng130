export function reactive(target) {
    return new Proxy(target, {
        get(target, key) {

        },
        set(target, key, value) {
            
        }
    })
}

let obj = {
    name: '张三',
    age: 18
}
Object.defineProperty(obj, 'name', {
    get() {
        console.log(1)
        return this.value
    },
    set(value) {
        console.log(2)
        this.name = value
    }
})
obj.name