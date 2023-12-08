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

const s = "A man, a plan, a canal: Panama";
const result = s.match(/[A-Za-z0-9]/g);
result.split('').join('').toLowerCase();
console.log('result', result);
// const resultRev = result.split('').reverse().join('');
// console.log("len", result === resultRev ? 'mathces' : 'not mathces');