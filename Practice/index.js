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
//     for (let j = 0; j < arr.length; j++) {
//         console.log("Col", arr.map(v => v[j]));
//     }
// }
let result = [];
for (let j = 0; j < arr[0].length; j++) {
    let column = arr.map(col => col[j]);
    console.log("column", column);
    let row = arr[j];
    // console.log("Result col", column.length !== new Set(column).size ? false : true);
    // console.log("Result row", column.length !== new Set(row).size ? false : true);
}