function isPrime(num) {
    if (typeof num !== "number" || num < 2) {
        return false;
    }

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example
console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));
