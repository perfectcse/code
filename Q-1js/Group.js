// Input array (THIS WAS MISSING)
const users = [
  { name: "Vishal", role: "developer" },
  { name: "Amit", role: "tester" },
  { name: "Rahul", role: "developer" },
  { name: "Neha", role: "tester" }
];

// Group function
function groupBy(arr, key) {
  let result = {};

  for (let item of arr) {
    let groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}

// Function call
console.log(groupBy(users, "role"));