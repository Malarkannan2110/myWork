let str = "HelloWorld123@#";

// Counters
let smallCount = 0;
let capitalCount = 0;
let digitCount = 0;
let specialCount = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        smallCount++;
    } 
    else if (ch >= 'A' && ch <= 'Z') {
        capitalCount++;
    } 
    else if (ch >= '0' && ch <= '9') {
        digitCount++;
    } 
    else {
        specialCount++;
    }
}

console.log("Small letters:", smallCount);
console.log("Capital letters:", capitalCount);
console.log("Digits:", digitCount);
console.log("Special characters:", specialCount);
