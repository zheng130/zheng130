let a = new Array(10000);
function fn() {
    for (let i = 0; i < a.length; i++) {
        window.console.log(1)
    }
}
   

let b = function() {
    for (let i = 0; i < a.length; i++) {
        window.console.log(1)
    }
}
