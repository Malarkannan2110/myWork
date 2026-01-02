let a2 = 12, b2 = 15;
let gcdVal = a2, tempB = b2;

while (tempB !== 0) {
    let temp = tempB;
    tempB = gcdVal % tempB;
    gcdVal = temp;
}

let lcmVal = (a2 * b2) / gcdVal;
console.log("LCM is:", lcmVal);
