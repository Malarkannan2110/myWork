let num7 = 1221;
let originalNum = num7;
let revNum = 0;

while (num7 > 0) {
    let digit = num7 % 10;
    revNum = revNum * 10 + digit;
    num7 = Math.floor(num7 / 10);
}

console.log(originalNum, "is palindrome?", revNum === originalNum);
