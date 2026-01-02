let n5 = 20;

console.log("Prime numbers between 1 and", n5, ":");
for (let i = 2; i <= n5; i++) {
    let prime = true;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i);
    }
}
