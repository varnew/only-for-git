function deepclone (obj = {}) {
    let deepObj
    if(typeof(obj) !== 'object' || obj == null){
        return obj
    }
    if(obj instanceof Object){
        deepObj = {}
    } else {
        deepObj = []
    }
    for(const key in obj) {
        if(obj.hasOwnProperty(key)){
            deepObj[key] = deepclone(obj[key])
        }
    }
    return deepObj
}

const obj = {
    name: 'wxl',
    age: 26,
    orther: {
        money: 'more'
    },
    list: [
        { name: 'test' }
    ]
}

const obj1 = deepclone(obj)
console.log('----------')
console.log('obj1', obj1)
console.log('----------')