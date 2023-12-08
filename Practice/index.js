// let board = [
  
// //   0   1     2        3    4    5           6    7    8
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


// // const set = new Set();

// // i for row
// // j for column
// // for (let i = 0; i < 9; i++) {
// //     for (let j = 0; j < 9; j++) {
// //         // for Rows
// //         const row = board[i][j];
// //         row === '.' ? '' : rows.push(row) 
// //         // for Columns
// //         const col = board[j][i]; 
// //         col === '.' ? '' : columns.push(col)
// //         const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
// //         console.log('box num', boxNum);
        
// //         if (columns.length !== new Set(columns).size || rows.length !== new Set(rows).size) {
// //             columns = [];
// //             rows = [];
// //             return false;
// //         } else {
// //             columns = [];
// //             rows = [];
// //             return false;
// //         }
// //     }
// // }

// const set = new Set();
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         const value = board[i][j];
//         if (value !== '.') {
//             const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
//             const box = `box ${boxNum}, value ${value}`;
//             console.log("box", box);
//         }        
//     }
// }

const numbers = [2, 7, 11, 15];
const target = 9;
const result = []

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        if (numbers[i] + numbers[j] === target) {

            result.push(i + 1, j + 1)
        }
        // console.log(`The Index from i = ${i} and index from j = ${j} sum up to Result which is ${target}`);
    }
}
console.log("result", result);