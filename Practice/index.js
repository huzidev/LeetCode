let nums = [5, 2, 5, 3, 5, 3, 1, 1, 3];
let k = 2;

let newArray = [];
if (nums.length === 1) {
    console.log(newArray.push(nums))
} else {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1] && !newArray.includes(nums[i]) && i !== nums.length && newArray.length !== k) {
            newArray.push(nums[i]);
        }
    } if (newArray.length !== k) {
        // let a = newArray.push(nums.filter((val) => !newArray.includes(val)));
        nums.forEach((val) => {
            if (!newArray.includes(val)) {
                newArray.push(val);
            }
        })
    }
}
console.log('new', newArray);