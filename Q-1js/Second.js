function secondLargest(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}

// Test
console.log(secondLargest([10, 5, 20, 8, 15])); // 15
