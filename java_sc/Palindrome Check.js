let word = "madam";
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(word, "is palindrome?", isPalindrome);
