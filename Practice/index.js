let nums = [1, 2, 3, 4];
// let nums = [-1, 1, 0, -3, 3];
// let result = [];
// let newArray = [];

// let result = nums.map((v, i) => nums.filter((val, index) => i !== index).reduce((a, b) => a * b), 1); 

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

let res = [];
let start = 1;

for (let i = 0; i < nums.length; i++) {
    res.push(start);
    console.log(`res on ${i}st iteration`, res);
    start = start * nums[i];    
}

console.log("Outside res", res);