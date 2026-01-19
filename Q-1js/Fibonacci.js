function fibonacci(n) {
  let result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result.slice(0, n);
}

// Test
console.log(fibonacci(6)); // [0,1,1,2,3,5]
