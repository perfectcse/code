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