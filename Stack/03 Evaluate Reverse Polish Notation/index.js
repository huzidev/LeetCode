// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always TRUNCATES TOWARD ZERO.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32 - bit integer.


// Example 1:
// Input: tokens = ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// const a = ["2", "1", "+", "3", "*"];
// const a = ["4", "13", "5", "/", "+"];
const a = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

// Push parseInt() values into stack until a operator is found
// Push 2 and 1 into stack and then + operator is found
// Pop 2 and 1 from stack perfrom + operation and push the result BACK to stack
// [2, 1];
// 1 + 2 = 3;
// Push result 3 in stack
// [3, 3]
// * operator is found
// 3 * 3 = 9;
// [9]

// Incase of division and substraction, order of operands matter
// in division use Math.trunc() to truncate the result towards zero

let stack = [];
for (const item of a) {
    if (item === '+') {
        stack.push(stack.pop() + stack.pop());
        // use continue so it'll not reach parseInt(stack.push())
        continue;
    } else if (item === '*') {
        stack.push(stack.pop() * stack.pop());
        continue;
    } else if (item === '-') {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a - b);
        continue;
    } else if (item === '/') {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(Math.trunc(a / b));
        continue;
    }
    stack.push(parseInt(item));
}

console.log("Result", stack[0]);
