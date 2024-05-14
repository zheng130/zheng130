function timeout (time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

class SuperTask {
    constructor(parallelCount = 2) {
        this.tasks = []
        this.parallelCount = 2;
        this.runningCount = 0;
    }
    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this._run()
        })
    }
    _run () {
        while(this.runningCount < this.parallelCount && this.tasks.length) {
            const { task, resolve, reject } = this.tasks.shift();
            this.runningCount++;
            task().then(resolve).finally(() => {
                this.runningCount--;
                this._run()
            })
        }
    }
}

const superTask = new SuperTask();
function addTask (time, name) {
    superTask
    .add(() => timeout(time))
    .then(() => {
        console.log(`任务${name}完成`)
    })
}

// addTask(10000, 1)
// addTask(5000, 2)
// addTask(3000, 3)
// addTask(4000, 4)
// addTask(5000, 5)

// let obj = {name: {age: 12}}
let obj = {name: 1, age: {hh:33}}
function deepClone (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key])
        } 
    }
    return cloneObj
}
// obj = undefined
let b = deepClone(obj)

console.log(b)


