let num1 = 1234;
let reversedNum = 0;

while (num1 > 0) {
    let digit = num1 % 10;
    reversedNum = reversedNum * 10 + digit;
    num1 = Math.floor(num1 / 10);
}

console.log("Reversed number:", reversedNum);
