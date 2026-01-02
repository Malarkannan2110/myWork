let sentence = "JavaScript makes web development fun";
let word = "", longest = "";

for (let i = 0; i <= sentence.length; i++) {
    if (i === sentence.length || sentence[i] === " ") {
        if (word.length > longest.length) {
            longest = word;
        }
        word = "";
    } else {
        word += sentence[i];
    }
}

console.log("Longest word:", longest);
