let str4 = "programming";
let target = "g";
let count = 0;

for (let i = 0; i < str4.length; i++) {
    if (str4[i] === target) {
        count++;
    }
}

console.log(`'${target}' occurs`, count, "times");
