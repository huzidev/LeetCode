// let nums = [1, 2, 3, 4];
let nums = [-1, 1, 0, -3, 3];
// let result = [];
let newArray = [];


// console.log("Test", nums.map((val, index) => nums.filter((value, i) => index !== i).reduce((a, b) => a * b), 1));

let result = nums.map((v, i) => nums.filter((val, index) => i !== index).reduce((a, b) => a * b), 1); 

// for (let i = 0; i < nums.length; i++) {
//     console.log("Res", nums.map((value, index) => index))
//     // newArray = nums.filter((v, index) => index !== i);
//     // let val = 1;
//     // val = newArray.reduce((a, b) => a * b, 1);
//     // // for (let j = 0; j < newArray.length; j++) {
//     // //     val = val * newArray[j];
//     // // }
//     // result.push(val);
// }
console.log("Result ", result);
