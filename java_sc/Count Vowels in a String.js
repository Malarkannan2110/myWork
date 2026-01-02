let text = "JavaScript";
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < text.length; i++) {
    if (vowels.indexOf(text[i]) !== -1) {
        vowelCount++;
    }
}

console.log("Number of vowels:", vowelCount);
