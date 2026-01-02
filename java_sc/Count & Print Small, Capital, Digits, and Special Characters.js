let str = "HelloWorld123@#";

// Counters
let smallCount = 0;
let capitalCount = 0;
let digitCount = 0;
let specialCount = 0;

// Strings to store characters
let smallChars = "";
let capitalChars = "";
let digitChars = "";
let specialChars = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        smallCount++;
        smallChars += ch + " ";
    } 
    else if (ch >= 'A' && ch <= 'Z') {
        capitalCount++;
        capitalChars += ch + " ";
    } 
    else if (ch >= '0' && ch <= '9') {
        digitCount++;
        digitChars += ch + " ";
    } 
    else {
        specialCount++;
        specialChars += ch + " ";
    }
}

console.log("Small letters:", smallCount, "=>", smallChars.trim());
console.log("Capital letters:", capitalCount, "=>", capitalChars.trim());
console.log("Digits:", digitCount, "=>", digitChars.trim());
console.log("Special characters:", specialCount, "=>", specialChars.trim());
