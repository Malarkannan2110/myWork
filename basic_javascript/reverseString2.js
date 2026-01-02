function reverseString(str) {
    if (typeof str !== "string") {
        console.log("Invalid input: Please provide a string.");
        return null;
    }

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
console.log("Reversed string:", reverseString("JavaScript"));
