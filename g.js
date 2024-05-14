let str = 'aabcccccccrrrr'
function getMaxNum (str) {
    let arr = str.split('');
    let obj = {}
    let b = []
    let keys = []
    arr.forEach(element => {
        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }
    });
    
    Object.keys(obj).forEach(k => {
        b.push({
            key: k,
            count: obj[k]
        })
    })
    b.sort((a, b) => b.count - a.count);
    let s = [];
    b.forEach(item => {
        let a = item.count;
        for (let i = 0; i < a; i++) {
            s.push(item.key)
        }
    })
    console.log(s)
    
}

// getMaxNum(str)

function ff(ar) {
    let box = [];
    function run(arr) {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                run(arr, box)
                throw Error()
            } else {
                box.push(item)
            }
        })
    }
    run(ar, box)
    return box
    // arr.reduce((a, b) => {
    //     if (Array.isArray(b)) {
    //         box = box.concat(ff(b))
    //     } else {
    //         box.push(b)  
    //     }
    //     return box
    // }, [])
    return box
}
let mm = ff([1,[2,[3,4],5],6])
console.log(mm)
