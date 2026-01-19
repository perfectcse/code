function isPalindrome(str) {
    let reversed = "";

    // Step 1: Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    // Step 2: Compare
    if (str === reversed) {
        console.log(str + " ✅ is a Palindrome");
    } else {
        console.log(str + " ❌ is NOT a Palindrome");
    }
}

// Example usage
isPalindrome("madam");   // ✅ Palindrome
isPalindrome("level");   // ✅ Palindrome
isPalindrome("hello");   // ❌ Not Palindrome
isPalindrome("run");     // ❌ Not Palindrome
