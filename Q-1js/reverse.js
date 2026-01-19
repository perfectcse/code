function reverseString(str) {
    let reversed = "";               // Initialize empty string
    for (let i = str.length - 1; i >= 0; i--) { // Loop from last to first
        reversed += str[i];          // Append each character
    }
    return reversed;                 // Return reversed string
}

// Example
let original = "Vishal";
let reversed = reverseString(original);
console.log("Original String:", original); // 
console.log("Reversed String:", reversed); //
