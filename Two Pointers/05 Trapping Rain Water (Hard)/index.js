// Given n non - negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6
// Explanation: The above elevation map(black section) is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.

// Example 2:
// Input: height = [4, 2, 0, 3, 2, 5]
// Output: 9

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const output = 6;

let left = 0;
let right = height.length - 1;
let leftMax = 0;
let rightMax = 0;
let waterTrapped = 0;

while(left < right) {
    // 1st iteration: leftHeight is 0 and rightHeight is 1;
    // 2nd iteration: leftHeight is 1 and rightHeight is still 1 (Because only left ptr incremented in 1st iteration);
    // 3rd iteration: leftHeight is still 1 and rightHeight is now 2 (Because only right ptr decremented in 2nd iteration);
    let leftHeight = height[left];
    let rightHeight = height[right];

    // 1st iteration: leftMax is 0 and rightMax is 1;
    // 2nd iteration: leftMax is 1 and rightMax is still 1 (Because only left ptr incremented in 1st iteration);
    // 3rd iteration: leftMax is still 1 and rightMax is now 2 (Because only right ptr decremented in 2nd iteration);
    leftMax = Math.max(leftHeight, leftMax);
    rightMax = Math.max(rightHeight, rightMax);

    if (leftHeight < rightHeight) {
        // += is increment operator
        // 1st iteration: waterTrapped is zero because leftMax and leftHeight both were 0;
        // 3rd iteration: waterTrapped is still zero because leftMax and leftHeight both were 1;
        // 4th iteration: waterTrapped is now 1 because leftMax is 1 and leftHeight is 0;
        waterTrapped += leftMax - leftHeight;
        left++;
    } else {
        // 2nd iteration: waterTrapped is still 0 because rightMax and rightHeight both were 1;
        waterTrapped += rightMax - rightHeight;
        right++;
    }
}
    
return waterTrapped;