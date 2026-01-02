let str2 = "JavaScript is awesome";
let vowels = "aeiouAEIOU";
let replaced = "";

for (let i = 0; i < str2.length; i++) {
    if (vowels.indexOf(str2[i]) !== -1) {
        replaced += "*";
    } else {
        replaced += str2[i];
    }
}

console.log("After replacing vowels:", replaced);

