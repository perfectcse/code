function firstUniqueChar(s) {
  let count = {};

  // Count frequency of each character
  for (let ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

// Test
console.log(firstUniqueChar("leetcode")); // 0
console.log(firstUniqueChar("loveleetcode")); // 2
console.log(firstUniqueChar("aabb")); // -1
