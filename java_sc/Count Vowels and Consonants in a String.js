let str2 = "JavaScript";
let vowels = "aeiouAEIOU";
let vowelCount = 0, consonantCount = 0;

for (let i = 0; i < str2.length; i++) {
    if (/[a-zA-Z]/.test(str2[i])) {
        if (vowels.indexOf(str2[i]) !== -1) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log("Vowels:", vowelCount, "Consonants:", consonantCount);
