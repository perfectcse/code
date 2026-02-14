function capitalizeWords(str) {
    var words = str.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var firstChar = words[i].charAt(0).toUpperCase();
            var rest = words[i].slice(1);
            result.push(firstChar + rest);
        } else {
            result.push(words[i]);
        }
    }

    return result.join(" ");
}

// Example test
var input = "vishal is a good boy";
console.log(capitalizeWords(input));