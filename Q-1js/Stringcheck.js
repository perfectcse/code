function containsSubstring(mainStr, subStr) {
  if (subStr.length > mainStr.length) return false;

  for (let i = 0; i <= mainStr.length - subStr.length; i++) {
    let match = true;

    for (let j = 0; j < subStr.length; j++) {
      if (mainStr[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
}

// Test cases
console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("JavaScript", "Script")); // true
console.log(containsSubstring("JavaScript", "script")); // false (case-sensitive)
console.log(containsSubstring("abc", "d")); // false
