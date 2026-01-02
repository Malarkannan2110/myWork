let str4 = "javascript";
let counted = [];

for (let i = 0; i < str4.length; i++) {
    let count = 0;
    for (let j = 0; j < str4.length; j++) {
        if (str4[i] === str4[j]) {
            count++;
        }
    }
    if (count > 1 && counted.indexOf(str4[i]) === -1) {
        console.log(str4[i], "appears", count, "times");
        counted.push(str4[i]);
    }
}
