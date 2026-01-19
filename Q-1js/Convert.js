function toTitleCase(str) {
  return str
    .split(" ")
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

// Test
console.log(toTitleCase("Backend running javascript"));
// Backend Running Javascript