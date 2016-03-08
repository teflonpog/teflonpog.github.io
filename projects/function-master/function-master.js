// objectValues() :
// Should take an object and return its values in an array
function objectValues(obj) {
    var output = [];
    
    for (var key in obj) {
        output.push(obj[key]);
    }
    
    return output;
}

// keysToString() :
// Should take an object and return all its keys in a string each separated with a space
function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

// valuesToString() :
// Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj) {
    var output = "";
    
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            output += obj[key] + " ";
        }
    }
    return output.trim();
}

// arrayOrObject() :
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(arg) {
    if (Array.isArray(arg)) {
        return 'array';
    } else if (typeof arg === "object") {
        return 'object';
    }
}

// capitalizeWord() :
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}