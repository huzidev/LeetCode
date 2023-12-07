let board = [
  
//   0   1     2        3    4    5           6    7    8
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

// i for row
// j for column
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        // for Rows
        board[i][j] === '.' ? '' : row.push(board[i][j]) 
        // for Columns
        board[j][i] === '.' ? '' : column.push(board[j][i])

        if (column.length !== new Set(column).size || row.length !== new Set(row).size) {
            column = [];
            row = [];
            return false;
        } else {
            column = [];
            row = [];
            return false;
        }
    }
}