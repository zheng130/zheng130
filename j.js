

let o = (function() {
    let obj = {
        name: 1
    }
    return {
        say(k) {
            return obj[k]
        }
    }
})()
Object.defineProperty(Object.prototype, 'a', {
    get() {
        console.log(1, this)
        return this
    }
})
let ob = o.say('a')
ob.m=9
console.log(ob)
