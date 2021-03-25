Function.prototype.before = function (fn) {
    const func = this
    return function () {
        fn.apply(this, arguments)
        return func.apply(this, arguments)
    }
}

const test = function (val) {
    console.log('test', val)
}

const newFn = test.before((val, orther) => {
    console.log('before', val)
})

newFn('d')