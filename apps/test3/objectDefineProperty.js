
const prototype = Object.create(Array.prototype)
const methods = ['push', 'shift']
methods.forEach(key => {
    prototype[key] = (...args) => {
        Array.prototype[key].call(this, ...args)
        console.log('ddd')
    }
})

function defineReactive(target, key, value) {
    observe(value)
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            value = observe(newValue)
        }
    })
}

function observe(target) {
    if(typeof target !== 'object' || target == null){
        return target
    }
    if(Array.isArray(target)){
        target.__proto__ = prototype
    }
    for(const key in target) {
        defineReactive(target, key, target[key])
    }
}


const test = {
    name: 'item',
    age: {
        man: 26
    },
    list: [
        {
            name: '1'
        }
    ]
}

observe(test)

test.name = 'desv'
test.age.man = 28
test.list[0].name = '12'
test.list.push({ name: 2 })