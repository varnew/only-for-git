// function flat(arr) {
//     const result = []
//     const reduce = (arr) => {
//         arr.forEach(item => {
//             if(item instanceof Array){
//                 reduce(item)
//             } else {
//                 result.push(item)
//             }
//         })
        
//     }
//     reduce(arr)
//     return result
// }

function flat(arr) {
    return arr + ''
}

const arr = [1,3, [4,6, [1, 'a',3, [2]]], 0, 9]
const str = flat(arr)
console.log('str', str)