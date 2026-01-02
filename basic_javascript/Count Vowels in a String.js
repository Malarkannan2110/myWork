function countVowels(str) {
    if (typeof str !== "string") {
        console.log("Invalid input: Please provide a string.");
        return null;
    }

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// Example
console.log("Number of vowels:", countVowels("JavaScript"));
