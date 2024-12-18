// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:
// Input
// ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
// [[], [-2], [0], [-3], [], [], [], []]

// Output
// [null, null, null, null, -3, null, 0, -2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); return -3
// minStack.pop();
// minStack.top();    return 0
// minStack.getMin(); return -2


// Suppose we've values 5, 3, 7, 3, 8
// we've to maintain a stack of values and a stack of minimum values
// we'll create two array stack and minStack

// Note: minStack is create to have record only, values will be retrieved from the stack

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        // Push 5 in stack first value
        // Push 3 in stack second value
        // Push 7 in stack third value
        // Push 3 in stack fourth value
        // Push 8 in stack fifth value
        this.stack.push(val);
        // suppose minStack is empty hence push 5 first value
        // now stack is NOT empty and 3 is less than 5 hence push 3
        // now 7 is greater than 3 hence don't push
        // now 3 is equal to 3 hence push 3
        // now 8 is greater than 3 hence don't push
        if(!this.minStack.length || val <= this.minStack.at(-1)) {
            this.minStack.push(val);
        }
    }

    pop() {
        // Suppose last value of stack is 8 and last value of minStack is 3 both are different hence don't pop minStack
        // Now Suppose last value of stack is 3 and last value of minStack is 3 both are same hence pop minStack as well to maintain minStack
        // But still 3 is in stack and minSack as well  
        if (this.stack.at(-1) === this.minStack.at(-1)) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    top() {
        // Return last value of stack
        return this.stack.at(-1);
    }

    getMin() {
        // Return last value of minStack
        // Whatever the last value of minStack is the minimum value
        return this.minStack.at(-1);
    }
}