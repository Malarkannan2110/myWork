function fibonacci(n) {
    if (typeof n !== "number" || n <= 0) {
        console.log("Invalid input: Please provide a positive number.");
        return null;
    }

    let a = 0, b = 1;
    let series = "";

    for (let i = 1; i <= n; i++) {
        series += a + " ";
        let next = a + b;
        a = b;
        b = next;
    }
    return series.trim();
}

// Example
console.log("Fibonacci series (first 7 terms):", fibonacci(7));
