// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

const numbers = [2, 7, 11, 15];
const target = 9;

// creating pointers
const left = 0;
const right = numbers.length - 1;

let result = [];

while(left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
        result.push(numbers[left], numbers[right]);
    }
    // Already SORTED array therefore if sum > 0 means higher value from the right pointer is added therefore right--
    // if sum < 0 means left pointer is adding smaller values therefore left--
    sum > target ? right-- : left++;
}