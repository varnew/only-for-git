// Array.prototype.reduce = function (fn, init) {
//     let arr = this.concat()
//     if(init){
//         arr.unshift(init)
//     }
//     let res
//     let index = 0
//     while(arr.length > 1){
//         res = fn(arr[0], arr[1], index, this)
//         index++
//         arr.splice(0, 2, res)
//     }
//     return res
// }

// [1,2,3]
// [3,3]
// [6]

Array.prototype.reduce = function (fn, init) {
    const arr = this.concat()
    let index = init ? 0 : 1
    let pre = init ? init : arr[0]
    let res 
    const reduceFn = (pre, value, idx, arr) => {
        res = fn(pre, value, idx, arr)
        index++
        if(index < arr.length){
            reduceFn(res, arr[index], index, arr)
        }
    }
    reduceFn(pre, arr[index], index, arr)
    return res
}

const arr = [1,2,3]
const value = arr.reduce((pre, value, index, arr) => {
    return pre + value
}, 0)

console.log('value', value)