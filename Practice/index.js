// let board = [
  
  //0   1     2        3    4    5           6    7    8
//   ["5", "3", ".",     ".", "7", ".",        ".", ".", "."], // 0
//   ["6", ".", ".",     "1", "9", "5",        ".", ".", "."], // 1
//   [".", "9", "8",     ".", ".", ".",        ".", "6", "."], // 2

//   ["8", ".", ".",     ".", "6", ".",        ".", ".", "3"], // 3
//   ["4", ".", ".",     "8", ".", "3",        ".", ".", "1"], // 4
//   ["7", ".", ".",     ".", "2", ".",        ".", ".", "6"], // 5
  
//   [".", "6", ".",     ".", ".", ".",        "2", "8", "."], // 6
//   [".", ".", ".",     "4", "1", "9",        ".", ".", "5"], // 7
//   [".", ".", ".",     ".", "8", ".",        ".", "7", "9"], // 8
// ];


// let row = [];
// let column = [];
// let box = [];

// // i for row
// // j for column
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         // for Rows
//         board[i][j] === '.' ? '' : row.push(board[i][j]) 
//         // for Columns
//         board[j][i] === '.' ? '' : column.push(board[j][i])
//         let boxId = Math.floor(i/3) *3 + Math.floor(j/3);
//         if (column.length !== new Set(column).size || row.length !== new Set(row).size) {
//             column = [];
//             row = [];
//             return false;
//         } else {
//             column = [];
//             row = [];
//             return false;
        
//     }
// }



// for (let i = 0; i < board.length; i++) {
//     board.map(col => col[i] === '.' ? '' : column.push(col[i]));
//     board[i] === '.' ? '' : row.push(board[i]);
//     // console.log("Result col", column.length !== new Set(column).size ? false : true);
//     // console.log("Result row", row.length !== new Set(row).size ? false : true);
//     column = [];
//     row = [];

//     // let hold = i === 0 ? 0 : + 3;
//     // for (let j = hold; j < 6; j++) {
//         //     for (let k = hold; k < 6; k++) {
//             //         // board[j][k] === '.' ? '' : box.push(board[j][k]);
//             //         // console.log("3x3 Result", box.length !== new Set(box) ? false : true);
//             //         box.push(board[j][k])
//             //     }
//             // }
//             // console.log('box', box);
//         }

// let hold = 0;
// for (let j = hold; j < 3; j++) {
//     for (let k = hold; k < 3; k++) {
//         // board[j][k] === '.' ? '' : box.push(board[j][k]);
//         // console.log("3x3 Result", box.length !== new Set(box) ? false : true);
//         box.push(board[j][k])
//     }
// }
// console.log('box', box);











let nums = [9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7];
// let nums = [100, 4, 200, 1, 3, 2];
if (!nums.length) return 0;
nums.sort((a, b) => a - b);
let set = new Set(nums);
console.log("set", set);

let maxSequence = 0;
let currentSequence = 1;

for (const i of set) {
    let hold = i;

    if (set.has(hold + 1)) {
        currentSequence++;
    } else {
        if (maxSequence < currentSequence) {
            maxSequence = currentSequence;
            console.log("max seq", maxSequence);
        }
        currentSequence = 1;
    }
}
console.log("result", Math.max(currentSequence, maxSequence));


// if (!nums.length) return 0;
// nums.sort((a, b) => a - b);
// let set = new Set(nums);
// let maxSequence = 0;
// let currentSequence = 1;
// set.forEach((val, i) => {
//     let hold = i !== set.size ? i + 1 : '';
//     if (hold === val + 1) {
//         currentSequence++;
//     } else {
//         if (maxSequence < currentSequence) {
//             maxSequence = currentSequence;
//         }
//         currentSequence = 1;
//     }
// })
// return Math.max(currentSequence, maxSequence);