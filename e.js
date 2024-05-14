function a (arr) {
    // let arr = str.split('.');
    let obj = arr.reduce((m, n) => {
        
        return m+n
    }, 0)
    console.log(obj)
}

// a([1,2,3,4])





function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    let result;
    
    if (Array.isArray(obj)) {
      result = [];
      for (let i = 0; i < obj.length; i++) {
        result.push(deepClone(obj[i]));
      }
    } else {
      result = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key]);
        }
      }
    }
    return result;
  }

