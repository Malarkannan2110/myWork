function isPalindrome(str) {
    if (typeof str !== "string") {
        console.log("Invalid input: Please provide a string.");
        return null;
    }

    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example
console.log("Is 'madam' palindrome?", isPalindrome("madam"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));
