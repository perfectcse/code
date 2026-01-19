function countOccurrences(arr, value) {
  return arr.reduce((count, current) => {
    if (current === value) {
      return count + 1;
    }
    return count;
  }, 0);
}

// Test
console.log(countOccurrences([1,2,3,2,4,2], 2)); // 3
