const PENDING = 'pendding'
const FULLFILLED = 'fullfilled'
const REJESCED = 'rejected'
function Promise(executor) {
    this.promiseState = PENDING
    this.promiseResult = ''
    this.thenLists = []
    this.resovel = (value) => {
        if(this.promiseState === PENDING){
            this.promiseState = FULLFILLED
            this.promiseResult = value
            this.thenLists.forEach(item => {
                item.onResovel(value)
            })
        }
    }
    this.reject = (err) => {
        if(this.promiseState === PENDING){
            this.promiseState = REJESCED
            this.promiseResult = err
            this.thenLists.forEach(item => {
                item.onReject(err)
            })
        }
    }
    executor(this.resovel, this.reject)
}

function callback (fn, resolve, reject, value) {
    try {
        const res = fn(value)
        if(res instanceof Promise){
            res.then(r => {
                resolve(r)
            }, e => {
                reject(e)
            })
        } else {
            resolve(res)
        }
    } catch (err) {
        reject(err)
    }
    
}

Promise.prototype.then = function (onResovel, onReject) {
    return new Promise((resolve, reject) => {
            if(this.promiseState === PENDING) {
                this.thenLists.push({
                    onResovel: (value) => {
                        callback(onResovel, resolve, reject, value)
                    },
                    onReject: (err) => { 
                        callback(onReject, resolve, reject, err)
                    }
                })
            }
            if(this.promiseState === FULLFILLED){
                callback(onResovel, resolve, reject, this.promiseResult)
            }
            if(this.promiseState === REJESCED){
                callback(onReject, resolve, reject, this.promiseResult)
            }
    })
}


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test')
    }, 1000)
    // resolve('test')
    // reject('error')
})

const p1 = p.then((value) => {
    console.log('value', value)
}, (err) => {
    console.log('err', err)
})

setTimeout(() => {
    console.log('----------')
    console.log('p', p)
    console.log('p1', p1)
    console.log('----------')
}, 1200)


