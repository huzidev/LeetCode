// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non - alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const s = "A man, a plan, a canal: Panama";

// if string is empty then it's a valid palindrome hence return true
if (s === ' ') return true;

// to seprate only alpha-numeric characters and remove any special characters or symbols
// EX: initially the string is "A man, a plan, a canal: Panama" Here we've (, :) as symbols hence after matching it'll become amanaplanacanalpanama
let result = s.match(/[A-Za-z0-9]/g);

// if their were only special characters and symbols and NOT any alpha-numeric keys hence return true
// because after mathcing the result array will be empty string
if (!result) return true;

// to join and change into lowercase the result string
result = result.join('').toLowerCase();

// to reverse the result string to match if it's same forward and backward
const resultRev = result.split('').reverse().join('');

return result === resultRev ? true : false;
