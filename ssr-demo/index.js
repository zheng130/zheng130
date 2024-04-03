
function a (arr) {
    let aa = []
    arr.reduce((b, c) => {
        if (Array.isArray(c)) {
            aa = aa.concat(a(c))
        } else {
            aa.push(c)
        }
        return aa
    }, [])
    return aa
}

const b = a([1,2,[3,[4,5],6],7])
console.log(2, b)