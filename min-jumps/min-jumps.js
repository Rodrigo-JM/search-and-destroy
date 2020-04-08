'use strict';

const cache = {}

const childs = (num, arr) => {
    let childs = []
    
    for (let i = 0; i < num; i++) {
        childs.push(arr[i])
    }
    
    return childs
}

const reachedTheEnd = (arr, child) => {
    if (arr.length - child <= 0) {
        return true
    } else {
        return false
    }
}

//get number of jumps that each childs path generate
//                     [2,4,1,1,2,3,7,1,1,3] => 4 total jumps
// Complete this algo
const minJumps = (arr) => {

    let element = arr[0];
    let elementsJump = 1; 
    let childsJumps = Infinity;
    let currentChilds = childs(element, arr.slice(1))

    if (reachedTheEnd(arr.slice(1), element)) {
        return 1
    }


    for (let i = 0; i < currentChilds.length; i++) {
        let childsArray = arr.slice(i + 1)
        let currentChildJumps = minJumps(childsArray)
        
        if (childsJumps > currentChildJumps) {
            childsJumps = currentChildJumps
        }

    }

    return elementsJump + childsJumps
};

// const minJumps = (arr) => {
//     let jumps = 1
//     let index = 0;

//     while (index < arr.length) {
//         let biggest = Infinity

//         for (let i = 1; i <= arr[index]; i++) {
//             if (arr[index + i] > arr[biggest]) {
//                 biggest = index + i
//             }
//         }
//         if (index + biggest >= arr.length) {
//             break
//         }
//         index = biggest
//         jumps++
//     }

//     return jumps
// }


module.exports = minJumps