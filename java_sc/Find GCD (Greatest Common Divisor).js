let a1 = 48, b1 = 18;

while (b1 !== 0) {
    let temp = b1;
    b1 = a1 % b1;
    a1 = temp;
}

console.log("GCD is:", a1);
