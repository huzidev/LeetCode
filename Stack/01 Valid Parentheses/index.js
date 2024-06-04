// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const s = "()[]{}";
const set = ['(', '[', '{'];
let stack = [];

// looping over string therefore used s.length in case of array we use s.length - 1
for (let i = 0; i < s.length; i++) {
    let char = s[i];
    
    // if starting bracket is (, {, [ then push that bracket into stack else if starting bracket is not in the set then the bracket CAN'T be closed
    if (set.includes(char)) {
        stack.push(char);
    } else {
        // using pop() will return the top most value from array if the array is empty it'll return undefined
        // suppose their is these values in stack array [ '{', '[' ] on using pop() it'll return the top value which is '['
        // check prevChar with the current char if it doesn't match then return false
        let prevChar = stack.pop();
        if (
            prevChar === '(' && char !== ')' ||
            prevChar === '{' && char !== '}' || 
            prevChar === '[' && char !== ']' || 
            prevChar === undefined
        ) {
            return false
        };
    }
}

// if stack is empty it'll return true and stack will be empty only if all the brackets are closed with their corresponding brackets
return !stack.length;