let str7 = "javascript";
let lastRepeat = null;

for (let i = 0; i < str7.length; i++) {
    for (let j = i + 1; j < str7.length; j++) {
        if (str7[i] === str7[j]) {
            lastRepeat = str7[i];
        }
    }
}

console.log("Last repeating character:", lastRepeat);
