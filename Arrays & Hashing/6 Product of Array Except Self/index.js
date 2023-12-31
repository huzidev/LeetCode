// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32 - bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [6, 5, 4, 2]
// Output: [24, 12, 8, 6]

// Example 2:
// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]

// We can't use nested loop becuse O(n) is required hence if we use nested loop then it'll be O(n2)

let nums = [1, 2, 3, 4];

// if nums length is 2 then return nums.reverse because the problem is to get product of array except self
// Ex: [2, 1] on first iteration we don't need 2 hence in result array push [1] and 2nd iteration we don't need 1 hence push 2 [1, 2]
if (nums.length === 2) return nums.reverse();

let result = [];
let value = 1;

// forEach is best method takes lesser memory
nums.forEach((v) => {
    res.push(value);
    value = value * v;
})

for (let i = 0; i < nums.length; i++) {
    // on first itertaion value 1 will be push into to result array result = [1]
    result.push(value);
    // update value's value
    // now 1 x 1 is 1, now the value is 1 and on 2nd iteration 1 will push into the result array again and update value's value 1 x 2 is 2 now value is 2
    // now on third iteration first 2 will be push into array then update value's value 2 x 3 is 6 hence on last itertaion 6 will be pushed into the result array
    value = value * nums[i];
    // result array at the end will be [1, 1, 2, 6];
}

// now updating the value's value to 1 again
value = 1;

// using nums.length - 1 because result array's last value will always be accurate therefore we've put value = 1 and nums.length - 1 is 3 hence on 3rd index OR last value
// of result array will be accurate
for (let i = nums.length - 1; i >= 0; i--) {
    // result[i] means 3rd index values [1, 1, 2, 6] is 6 and value is 1 hence 1 * 6 will be 6 hence result[i] = value * result[i]
    // on 2nd iteration due to i-- i will be 2 hence 4 x 2 is 8 on 3rd iteration 12 x 1 hence 12 will be inserted on last iteration 24 x 1 hence 24 will be inserted
    result[i] = value * result[i];   
    // update value's value 1 x 4 is 4 because initially i is 3 hence on 3rd index of nums array is value 4 [1, 2, 3, 4]
    // now 4 x 3 is 12 now value will be 12
    // now 12 x 2 is 24
    value = value * nums[i];
}

return result;

// different code will give Time Limit Exceeds error
// let result = [];
// let newArray = [];

// let result = nums.map((v, i) => nums.filter((val, index) => i !== index).reduce((a, b) => a * b), 1);

// for (let i = 0; i < nums.length; i++) {
//     console.log("Res", nums.map((start, index) => index))
//     // newArray = nums.filter((v, index) => index !== i);
//     // let val = 1;
//     // val = newArray.reduce((a, b) => a * b, 1);
//     // // for (let j = 0; j < newArray.length; j++) {
//     // //     val = val * newArray[j];
//     // // }
//     // result.push(val);
// }