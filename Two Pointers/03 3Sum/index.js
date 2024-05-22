// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are[-1, 0, 1] and[-1, -1, 2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0, 1, 1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0, 0, 0]
// Output: [[0, 0, 0]]
// Explanation: The only possible triplet sums up to 0.

const nums = [-1, 0, 1, 2, -1, -4];

let result = [];

if (!nums.length) return result;

const isArrZero = nums.every((num) => num === 0);
if (isArrZero) {
    result.push([0,0,0]);
} else {
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++) {
        // if nums[i] === num[i-1] means number is same as of previous itertion hence continue (jump/skip) this iteration
        if (i > 0 && nums[i] === nums[i-1]) continue;        
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // to check if DUPLICATE values
                while(nums[left] === nums[left+1]) left++;
                if (right !== nums.length-1) {
                    while(nums[right] === nums[right+1]) right--;
                }   
                left++;
                right--;
            } else {
                sum < 0 ? left++ : right--;
            }
        }
    }
}


