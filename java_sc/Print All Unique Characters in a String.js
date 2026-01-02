let str1 = "javascript";
let uniqueChars = "";

for (let i = 0; i < str1.length; i++) {
    let count = 0;
    for (let j = 0; j < str1.length; j++) {
        if (str1[i] === str1[j]) {
            count++;
        }
    }
    if (count === 1) {
        uniqueChars += str1[i] + " ";
    }
}

console.log("Unique characters:", uniqueChars.trim());
