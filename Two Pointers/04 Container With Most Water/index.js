// You are given an integer array height of length n.There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).

// Find two lines that together with the x - axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.

// Example 2:
// Input: height = [1, 1]
// Output: 1

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// output = 49;

let left = 0;
let right = height.length - 1;
let max = 0;

while(left < right) {
    // For 1st iteration: right is at index 8th and left is at index 0th hence 8-0 = 8;
    // For 2nd itertaion: right is still at 8th index and left is at 1st index hence 9-1 = 7
    let width = right - left;

    // For 1st iteration: Math.min will return 1 as it is minimum number between 1 and 7, 1 will be multiplied by 8 (width) and maxArea (max water) will be 8;
    // For 2nd iteration: Math.min will return 7 as it is minimum number between 8 and 7, 7 will be multiplied by 7 (width) and maxArea (max water) will be 49;
    let maxArea = Math.min(height[left], height[right]) * width;
    if (max < maxArea) {
        max = maxArea;
    }

    // For 1st iteration: 1 < 7 hence left++ and height[left] will become 8 and height[right] still 7;
    // For 2nd iteration: 8 > 7 hence rigth-- and height[left] still 8 and height[right] will become 3;
    height[left] <= height[right] ? left++ : right--;
}