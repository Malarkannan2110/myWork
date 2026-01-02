function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Invalid input: Please provide an array with at least two numbers.");
        return null;
    }

    let largest = arr[0];
    let second = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}

// Example
console.log("Second largest number:", secondLargest([12, 45, 7, 89, 23]));
