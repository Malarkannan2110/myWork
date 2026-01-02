let num = 29;
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(num, "is prime?", isPrime);
