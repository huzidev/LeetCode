let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]]
;


// for (let i = 0; i < arr.length; i++) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("Col", arr.map(v => v[i]));
//     }
// }
let row = [];
let column = [];
let box = [];
for (let i = 0; i < board.length; i++) {
    board.map(col => col[i] === '.' ? '' : column.push(col[i]));
    board[i] === '.' ? '' : row.push(board[i]);
    // console.log("Result col", column.length !== new Set(column).size ? false : true);
    // console.log("Result row", column.length !== new Set(row).size ? false : true);
    column = [];
    row = [];
    // for 3x3 box
    for (let j = 0; j < 3; j++) {
        console.log("Box", board.map(val => val[j]));
    }
}