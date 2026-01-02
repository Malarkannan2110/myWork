let sentence = "JavaScript is fun to learn";
let wordCount = 0;
let inWord = false;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !inWord) {
        inWord = true;
        wordCount++;
    } else if (sentence[i] === " ") {
        inWord = false;
    }
}

console.log("Number of words:", wordCount);
