let arr = [1,2,3,4,5,6,7,8,9];

let job = []
for (let i = 0; i < arr.length; i++) {
    job.push(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                // console.log('Task '+i+' completed.');
                resolve();
            }, 1);
        });
    })
}

let v = []
for (let i = 0; i < job.length; i+=3) {
    v.push(job.slice(i, i+3))
}

Promise.all(v[0]).then(async() => {
    for (let i = 1; i < v.length; i++) {
        await new Promise((resolve, reject) => {
            Promise.all(v[i]).then((r) => {
                resolve()
            })
        })
    }
})


let a = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];
function b (arr) {
    let m = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            m = m.concat(b(item))
        } else {
            m.push(item)
        }
    });
    return m
}
let c = b(a)
console.log(':',c)



