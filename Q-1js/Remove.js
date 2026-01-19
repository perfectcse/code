const arr = [1,2,3,4,5,1,2,1,3,5];

// Using Set to remove duplicates
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1,2,3,4,5]
