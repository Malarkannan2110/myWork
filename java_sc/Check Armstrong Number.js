let num3 = 153;
let temp = num3;
let sumArm = 0;

// Count digits
let digits = 0;
let tempCount = num3;
while (tempCount > 0) {
    digits++;
    tempCount = Math.floor(tempCount / 10);
}

// Calculate Armstrong sum
while (temp > 0) {
    let digit = temp % 10;
    let power = 1;
    for (let i = 0; i < digits; i++) {
        power *= digit;
    }
    sumArm += power;
    temp = Math.floor(temp / 10);
}

console.log(num3, "is Armstrong?", sumArm === num3);
