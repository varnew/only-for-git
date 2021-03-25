function isObject(obj){
    return typeof obj === 'object'
}
const merge = (obj, target = {}) => {
    Object.keys(obj).forEach(key => {
      if (isObject(obj[key])) {
        if (isObject(target[key])) { // 都是对象
          Object.keys(obj[key]).forEach(prop => {
            target[key][prop] = obj[key][prop]
          })
        } else { // target不是对象 直接重写
          if (target[key]) {
            target[key] = {
              [key]: target[key],
              ...obj[key]
            }
          } else {
            target[key] = obj[key]
          }
          
        }
      } else {
        if (isObject(target[key])) {
          target[key] = {
            ...target[key],
            [key]: obj[key]
          }
        } else {
          target[key] = obj[key]
        }
      }
    })
    return target
  }
  const obj1 = {
    "pid": 1,  
    "signup": "注册",
    "menu": "菜单",
    "headers": {
      "common": "common",
      test: {
          age: '29'
      }
    }
  }
  const obj2 = {
    "pid": 2,
    "signup": {
      "sin": 2
    },
    "menu": {
      "id": 1
    },
    "headers": {
      "test": {
          name: 'wxl'
      }
    }
  }
  const result = merge(obj1, obj2)
  // {
  //   pid: 2,
  //   signup: { signup: '注册', sin: 2 },
  //   menu: { menu: '菜单', id: 1 },
  //   headers: { common: 'common', test: 123 }
  // }
  console.log(result)
  