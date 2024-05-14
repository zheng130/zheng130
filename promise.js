
class MyPromise {
    constructor(executor) {
        this._state = 'pending';
        this._value = undefined;
        executor(this._resolve.bind(this), this._reject.bind(this))
    }
    _resolve(data) {
        this._state = 'fulfilled';
        this._value = data;
    }
    _reject(error) {
        this._state = 'rejected';
        this._value = error;
    }
}


new MyPromise((resolve, reject) => {
    resolve(3);
})


