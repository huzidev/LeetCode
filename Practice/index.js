let board = [
  
  //0   1     2        3    4    5           6    7    8
  ["5", "3", ".",     ".", "7", ".",        ".", ".", "."], // 0
  ["6", ".", ".",     "1", "9", "5",        ".", ".", "."], // 1
  [".", "9", "8",     ".", ".", ".",        ".", "6", "."], // 2

  ["8", ".", ".",     ".", "6", ".",        ".", ".", "3"], // 3
  ["4", ".", ".",     "8", ".", "3",        ".", ".", "1"], // 4
  ["7", ".", ".",     ".", "2", ".",        ".", ".", "6"], // 5
  
  [".", "6", ".",     ".", ".", ".",        "2", "8", "."], // 6
  [".", ".", ".",     "4", "1", "9",        ".", ".", "5"], // 7
  [".", ".", ".",     ".", "8", ".",        ".", "7", "9"], // 8
];


let row = [];
let column = [];
let box = [];

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

    }
}


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
// nums.sort((a, b) => a - b);
// let newArr = new Set(nums);
// let newRes = [...newArr]
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