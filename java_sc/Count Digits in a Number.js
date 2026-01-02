let number = 12345;
let digitCount = 0;

do {
    digitCount++;
    number = Math.floor(number / 10);
} while (number > 0);

console.log("Number of digits:", digitCount);
