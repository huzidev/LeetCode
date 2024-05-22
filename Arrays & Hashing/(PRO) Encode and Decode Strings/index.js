// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Input: ["neet", "code", "love", "you"]
// Output: ["neet", "code", "love", "you"]

// the input and output looks same because the input should be Encoded into string and then Decoded back into it's original form 
// Like secured message: Encrypted message when received by receiver is been decrypted then


let inputs = ["neet", "code", "love", "you"];

const encoded = inputs.join('-encoded-');
// the encoded message will be neet-encoded-code-encoded-love-encoded-you

const dedoded = encoded.split("-encoded-");
// the decoded message will be ["neet", "code", "love", "you"]