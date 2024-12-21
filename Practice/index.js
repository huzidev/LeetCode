// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

// Example 2:
// Input: temperatures = [30, 40, 50, 60]
// Output: [1, 1, 1, 0]

// Example 3:
// Input: temperatures = [30, 60, 90]
// Output: [1, 1, 0]

//         0   1   2    3   4   5   6   7
const T = [73, 74, 75, 71, 69, 72, 76, 73];

const totalTemp = T.length;
let result = new Array(totalTemp).fill(0);
// console.log("result", result);

// takes tuple of [temperature, index]
// Example: [[73, 0], [74, 1]] 73 is temperature and 0 is index
let stack = [];

// since result array is filled with 0 initially [0, 0, 0, 0, 0, 0, 0, 0]
// therefore traverse in reverse order
for (let i = totalTemp - 1; i >= 0; i--) {
  // since stack is taking tuple of [temperature, index] so stack[stack.length][0] is temperature and stack[stack.length][1] is index
  // first: stack is empty
  // second: stack is [[73, 7]] and current T[i] is 76 hence it'll pop [73, 7] and push [76, 6]
  // third: stack is [[76, 6]] and current T[i] is 72 hence false
  while (stack.length && T[i] >= stack[stack.length - 1][0]) {
    stack.pop();
  }
  // first and second result remains [0, 0, 0, 0, 0, 0, 0, 0]
  // third: stack is [[76, 6]] and current T[i] is 72 hence true, result[5] will be 6 - 5 = 1
  // third: result will be [0, 0, 0, 0, 0, 1, 0, 0]
  if (stack.length && T[i] < stack[stack.length - 1][0]) {
    // stack.length - 1 will take top of the stack always
    result[i] = stack[stack.length - 1][1] - i;
  }
  // first: it'll push [[73, 7]] because of reverse order and result array is still [0, 0, 0, 0, 0, 0, 0, 0]
  // second: it'll push and become [[76, 6]] because of true condition in while loop which pop [73, 7]
  // third: it'll push [[76, 6], [72, 5]]
  stack.push([T[i], i])
}

console.log("result", result);
