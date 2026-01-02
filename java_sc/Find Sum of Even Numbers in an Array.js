let arr12 = [1, 2, 3, 4, 5, 6];
let sumEven = 0;

for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] % 2 === 0) {
        sumEven += arr12[i];
    }
}

console.log("Sum of even numbers:", sumEven);
