let num2 = 1234;
let sumDigits = 0;

while (num2 > 0) {
    sumDigits += num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log("Sum of digits:", sumDigits);
