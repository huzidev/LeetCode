// Given an integer array nums and an integer k, return the k most frequent elements.You may return the answer in any order.

// Example 1:
// Input: nums = [1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

// Creating an object called res to store keys and values
// Ex: {
//     '1' : [1, 1, 1],
//     '2' : [2, 2],
//     '3' : [3]
// }
// after storing keys and values we'll get the frequency (length) of the values according to respective key
let res = {};
let result = [];

// will loop over the nums array and initially when res object is empty it'll put the key and value as { '1': [1] } by running res[value] = [value] code
// on next iteration when their is existing value it'll push the value of that index as { '1' : [1, 1] } because res[value] already exist because of first iteration
nums.forEach((value) => {
    res[value] ? res[value].push(value) : res[value] = [value];
})

// to get the frequency(length) of all the keys
// b[1].length - a[1].length because we are getting frequency(length) on the basis of values and values Ex: [1, 1, 1] are at 1st index on 0th index their are keys
// b[1].length - a[1].length to get maximum frequency(length) keys first
// Before {
//     '1' : [1, 1, 1],
//     '2' : [2, 2],
//     '3' : [3]
// }
// After {
    '1' : []
}
let count = Object.entries(res).sort((a, b) => b[1].length - a[1].length);
