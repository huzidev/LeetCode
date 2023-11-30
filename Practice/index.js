// let nums = [1, 2, 3, 4];
let nums = [0, 0];

let result = [];
let newArray = [];
let val;

if (nums.length === 2) {
    nums.forEach((value, i) => value * nums[index + 1])
}

for (let i = 0; i < nums.length; i++) {
    newArray = nums.filter((v, index) => index !== i);
    console.log("New array", newArray);
    for (let j = 0; j < newArray.length - 1; j++) {
        if (j !== 0) {
            val = val * newArray[j + 1];
        } else {
            val = newArray[j] * newArray[j + 1];
        } 
    }
    result.push(val);
}
console.log("Result", result);