let str6 = "javascript";
let firstRepeat = null;

for (let i = 0; i < str6.length; i++) {
    for (let j = i + 1; j < str6.length; j++) {
        if (str6[i] === str6[j]) {
            firstRepeat = str6[i];
            break;
        }
    }
    if (firstRepeat !== null) break;
}

console.log("First repeating character:", firstRepeat);
