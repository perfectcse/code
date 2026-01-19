function countOccurrences(arr) {
  let result = {};

  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

// Test
console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
