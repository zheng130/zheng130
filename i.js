let o = (function() {
    let obj = {
        a: 1,
        b:2
    }
    return {
        get:function(k) {
            return obj[k]
        }
    }
})()

Object.defineProperty(Object.prototype, 'abc', {
    get() {
        return this
    }
})
let obj2 = o.get('abc')
obj2.a = 8
console.log(o.get('a'))