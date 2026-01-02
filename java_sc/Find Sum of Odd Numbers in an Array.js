let arr13 = [1, 2, 3, 4, 5, 6];
let sumOdd = 0;

for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] % 2 !== 0) {
        sumOdd += arr13[i];
    }
}

console.log("Sum of odd numbers:", sumOdd);
