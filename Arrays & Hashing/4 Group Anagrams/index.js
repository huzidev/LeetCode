// Given an array of strings strs, group the anagrams together.You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// empyt object so we can assigned key and value and value will be in array format
// EX: { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
let result = {};
strs.forEach(value => {
    // cleaned to get sorted value Ex: eat => aet, tea => aet
    const cleaned = value.split('').sort().join('');
    // if in object result we've key present then pust that index value in array
    // Ex: { aet: [ 'eat' ] } here we've aet key already present therefore push the value of that index in array as tea sorted value is also aet hence it matches the condition
    if (result[cleaned]) {
        result[cleaned].push(value);
    }
    // will run initially as empty object OR when value doesn't exitst in ours object
    // Ex: {} => { aet: [ 'eat' ] } 
    else {
        result[cleaned] = [value]
    }

    // OR

    result[cleaned] ? result[cleaned].push(value) : result[cleaned] = [value];
})

// OR

for (let value of strs) {
    const cleaned = value.split('').sort().join('');
    if (result[cleaned]) {
        result[cleaned].push(value);
    } else {
        result[cleaned] = [value];
    }
}

console.log(Object.values(result));