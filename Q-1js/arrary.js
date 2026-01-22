// Array Intersection
// Write a JavaScript program to find the intersection of two arrays. The intersection should contain elements that appear in both arrays. Each element in the result should appear as many times as it shows up in both arrays. Return the result as an array.
// code

function intersect(arr1, arr2) {
  let count = {};
  let result = [];

  // Count frequency of elements in arr1
  for (let num of arr1) {
    count[num] = (count[num] || 0) + 1;
  }

  // Check elements in arr2
  for (let num of arr2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }

  return result;
}

// Test cases
console.log(intersect([1, 2, 2, 1], [2, 2]));        // [2, 2]
