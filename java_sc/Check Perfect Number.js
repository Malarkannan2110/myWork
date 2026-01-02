let num4 = 28;
let sumDiv = 0;

for (let i = 1; i <= num4 / 2; i++) {
    if (num4 % i === 0) {
        sumDiv += i;
    }
}

console.log(num4, "is perfect number?", sumDiv === num4);
