// Count Characters in a String
function charFrequency(str) {
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  return freq;
}

// Test cases
console.log(charFrequency("Programming"));
console.log(charFrequency("Vishal"));