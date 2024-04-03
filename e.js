function a (arr) {
    // let arr = str.split('.');
    let obj = arr.reduce((m, n) => {
        
        return m+n
    }, 0)
    console.log(obj)
}

a([1,2,3,4])