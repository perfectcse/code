function shallowClone(obj) {
    return { ...obj };
}

let original = {
    name: "Vishal",
    age: 25,
    address: {
        city: "Delhi"
    }
};

let clone = shallowClone(original);

console.log("Original:", original);
console.log("Clone:", clone);

//“When the function is called, the spread operator creates a new object and copies the top-level properties. However, 
//nested objects are copied by reference, not deeply cloned.”//