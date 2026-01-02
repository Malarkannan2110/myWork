// Function to reverse a string
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string");
    }
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("JavaScript")); // Output: tpircSavaJ
