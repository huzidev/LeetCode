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











// let nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
let nums = [100, 4, 200, 1, 3, 2];
if (!nums.length) return 0;
nums.sort((a, b) => a - b);
let newArr = [...new Set(nums)];
console.log("new arr", newArr);

let maxSequence = 0;
let currentSequence = 1;
// let hold = newArr[0];
newArr.forEach((val, i) => {
    let hold = i !== newArr.length - 1 ? newArr[i + 1] : '';
    if (hold === val + 1) {
        hold++;
        currentSequence++;
    } else {
        if (maxSequence < currentSequence) {
            maxSequence = currentSequence;
        }
        currentSequence = 1;
    }
})
console.log("Result", Math.max(currentSequence, maxSequence));

// let result = [];
// console.log('New array', newRes);
// let hold = newRes[0];
// let longestSequence = 0;
// let currentSequence = 1;
// console.log("hold", hold);
//     while (newArr.has(hold + 1)) {
//         hold++;
//         currentSequence++;
//     }
//     longestSequence = Math.max(longestSequence, currentSequence);

//     // if (hold === val) {
//     //     result.push(val);
//     //     hold ++;
//     //     console.log("HOld after", hold);
//     // }

// console.log("result", longestSequence);