Function.prototype.bind = function () {
    const ags = Array.prototype.slice(arguments)
    const fn = this
    const _this = ags.shift()

    return function () {
        fn.call(_this, ags)
    }
}

const fn = function() {
    console.log(this.name)
}

const fn1 = fn.bind({ name: 'wxl' })

fn1()

