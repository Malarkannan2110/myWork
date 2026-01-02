let str = "JavaScript Programming is Fun";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let vowelChars = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (vowels.indexOf(ch) !== -1) { // Check if character is a vowel
        vowelCount++;
        vowelChars += ch + " ";
    }
}

console.log("Vowel count:", vowelCount);
console.log("Vowels found:", vowelChars.trim());
