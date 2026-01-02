
/**
 * 📄 reverseString.js
 * -------------------
 * This function reverses a string with input validation.
 * - Checks if input is a string
 * - Uses split(), reverse(), join()
 * - Throws error for invalid input
 *
 * Example:
 * console.log(reverseString("JavaScript")); // tpircSavaJ
 */


// Function to reverse a string
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string");
    }
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("JavaScript")); // Output: tpircSavaJ
