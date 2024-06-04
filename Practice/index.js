// const s = "()[]{}";
const s = "{[]}";
const set = ['(', '[', '{'];
let stack = [];

for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (set.includes(char)) {
        stack.push(char);
    } else {
        let prevChar = stack.pop();
        if (prevChar === '(' && char !== ')' || prevChar === '{' && char !== '}' || prevChar === '[' && char !== ']' || prevChar === undefined) {
            return false
        };
    }
}
return !stack.length;