
const fn = async () => {
    
    new Promise((resolve) => {
      resolve('我是微任务啦');
    }).then((res) => {
      console.log(res);
    });

    console.log('我是同步任务哎');
    
    await new Promise((resolve) => {
       resolve("我成功喽")
    }).then((r) => {
        console.log(r)
    });
    new Promise((resolve) => {
      resolve('我是await之后的微任务啦');
    }).then((res) => {
      console.log(res);
    });

    console.log('我是await之后的同步任务啦');
  };
  

let task = function () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
let task1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}
let arr = [task,task1,task,task,task,task,task,task]

function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;
  
    return new Promise((resolve, reject) => {
      // 请求maxNum个
      while (count < maxNum) {
        next();
      }
      function next() {
        let current = count++;
        // 处理边界条件
        if (current >= len) {
          // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
          !result.includes(false) && resolve(result);
          return;
        }
        const url = urls[current];
        fetch(url)
          .then((res) => {
            // 保存请求结果
            result[current] = res;
            console.log(`完成 ${current}`, new Date().toLocaleString());
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          })
          .catch((err) => {
            console.log(`结束 ${current}`, new Date().toLocaleString());
            result[current] = err;
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          });
      }
    });
  }
  





function fnn(tasks, count) {
    let arr = []
    for (let i = 0; i < tasks.length; i += count) {
        arr.push(tasks.slice(i, i + count));
    }

    async function run(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(1, arr[i]);
            await Promise.all(arr[i].map(task => task()));
        }
    }

    run(arr);
}

fnn(arr, 3);

