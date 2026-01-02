function factorial(n) {
    if (typeof n !== "number" || n < 0) {
        console.log("Invalid input: Please provide a non-negative number.");
        return null;
    }

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Example
console.log("Factorial of 5:", factorial(5));
