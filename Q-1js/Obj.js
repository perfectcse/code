function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}


console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ name: "Vishal" })); // false