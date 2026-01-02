let base = 2;
let exponent = 5;
let powerResult = 1;

for (let i = 1; i <= exponent; i++) {
    powerResult *= base;
}

console.log(base, "raised to", exponent, "is", powerResult);
