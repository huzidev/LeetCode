// let board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]
// ;


// // for (let i = 0; i < arr.length; i++) {
// //     for (let i = 0; i < arr.length; i++) {
// //         console.log("Col", arr.map(v => v[i]));
// //     }
// // }
// let row = [];
// let column = [];
// let box = [];
// for (let i = 0; i < board.length; i++) {
//     board.map(col => col[i] === '.' ? '' : column.push(col[i]));
//     board[i] === '.' ? '' : row.push(board[i]);
//     // console.log("Result col", column.length !== new Set(column).size ? false : true);
//     // console.log("Result row", column.length !== new Set(row).size ? false : true);
//     column = [];
//     row = [];
// }

// console.log("box", board.length % 3);

let nums = [1, 4, 200, 1, 3, 2];
// let nums = [0,3,7,2,5,8,4,6,0,1]; 
// let nums = [0,8,9,100,6,4,3,2,99,1]; 
nums.sort((a, b) => a - b);
let newArr = new Set(nums);
let newRes = [...newArr]
let result = [];
let hold = newRes[0];
console.log("Hold", hold);
newRes.forEach((val, i) => {
    if (hold === val) {
        result.push(val);
        hold = i + 1;
    }
})
console.log('result', result);

console.log("result", result.length);