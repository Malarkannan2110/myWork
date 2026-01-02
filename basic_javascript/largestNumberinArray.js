function findLargest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Invalid input: Please provide a non-empty array.");
        return null;
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            console.log("Invalid element detected: All elements must be numbers.");
            return null;
        }
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example
let numbers = [12, 45, 7, 89, 23];
console.log("Largest number:", findLargest(numbers));
