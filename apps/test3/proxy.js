function defineReactive(target) {
    const handle = {
        get(target, property, receiver) {
            Reflect.get(target, property, receiver)
        },
        set(target, property, value){
            Reflect.set(target, property, value)
            console.log('dd')
        }
    }
    return new Proxy(target, handle)
}


const test = {
    name: 'wxl',
    age: {
        man: 26
    },
    list: [
        { name: 'd' }
    ]
}

const prx = defineReactive(test)

prx.name