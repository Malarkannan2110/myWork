let str2 = "hello";
let freq = {};

for (let i = 0; i < str2.length; i++) {
    let ch2 = str2[i];
    if (freq[ch2]) {
        freq[ch2]++;
    } else {
        freq[ch2] = 1;
    }
}

console.log("Character frequency:", freq);
