// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

let s = "anagram";
let t = "nagaram";

let val1 = s.toLowerCase().split('').sort().join('');
let val2 = t.toLowerCase().split('').sort().join('');

// after .split('') it'll became [ 'a', 'n', 'a', 'g', 'r', 'a', 'm' ]
// after sort both s and t became same values [ 'a', 'a', 'a', 'g', 'm', 'n', 'r' ]
// after .join('') the values became string from array aagmnr hence it'll became easy to compare both value after sorting and spliting

return val1.length === val2.length && val1 === val2 ? true : false;