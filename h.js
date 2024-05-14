// 给定一个字符串 统计每个字符出现的次数 按最大值排序
function getMaxStr(str) {
    let arr = str.split('');
    let obj = {};
    let box = []
    arr.forEach(element => {
        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }
    });
   
    Object.keys(obj).forEach(k => {
        box.push({
            key: k,
            count: obj[k]
        })
    })
    box.sort((a, b) => b.count - a.count)
    let data = []
    box.forEach(item => {
        data.push([item.key, item.count])
    })
    return data
}
let a = getMaxStr('aabbccddd')



// 给定一个乱序数组a，找到两个和为target的数组下标index1，index2

let nums = [2, 3, 7, 11],
target = 10
function sum (arr, target) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let b = target - arr[i];
        if (obj[b]) {
            return {
                index1: i,
                index2: obj[b]
            }
        } else {
            obj[arr[i]] = i+''
        }
    }
}
let d = sum(nums, target);
console.log(d)