// let nums = [1, 2, 3, 4];
let nums = [2, 3];
// if (nums.length === 2) {
//     console.log('nums', nums.reverse());
// }
// let result = [];
// let newArray = [];
// let val;

// for (let i = 0; i < nums.length; i++) {
//     newArray = nums.filter((v, index) => index !== i);
//     console.log("New array", newArray);
//     for (let j = 0; j < newArray.length - 1; j++) {
//         if (j !== 0) {
//             val = val * newArray[j + 1];
//         } else {
//             val = newArray[j] * newArray[j + 1];
//         } 
//     }
//     result.push(val);
// }
// console.log("Result", result.push(nums[1, 0]));

if (nums.length === 2) {
    console.log("nums", nums.reverse());
    return nums.reverse();
} else {
    let result = [];
    let newArray = [];
    let val;

    for (let i = 0; i < nums.length; i++) {
        newArray = nums.filter((v, index) => index !== i);
        for (let j = 0; j < newArray.length - 1; j++) {
            if (j !== 0) {
                val = val * newArray[j + 1];
            } else {
                val = newArray[j] * newArray[j + 1];
            }
        }
        result.push(val);
    }
    // return(result);
    // console.log("nums", nums.reverse());
}