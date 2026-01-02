let str3 = "JavaScript is awesome";
let vowels2 = "aeiouAEIOU";
let noVowels = "";

for (let i = 0; i < str3.length; i++) {
    if (vowels2.indexOf(str3[i]) === -1) {
        noVowels += str3[i];
    }
}

console.log("String without vowels:", noVowels);
