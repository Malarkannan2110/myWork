function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Invalid input: Please provide a non-empty array.");
        return null;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            console.log("Invalid element detected: All elements must be numbers.");
            return null;
        }
        sum += arr[i];
    }
    return sum;
}

// Example
console.log("Sum of array:", sumArray([1, 2, 3, 4, 5]));
